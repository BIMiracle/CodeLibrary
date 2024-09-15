const axios = require('../../axios');

// Jenkins URL, 用户名和API Token
const jenkinsUrl = 'https://jenkins.aisono.cn';
const jenkinsUsername = 'linjie';
const jenkinsApiToken = '11f7d10a43e7a444b3953adad5f338de51';
// 替换为你的Jenkins作业名称
const jobName = encodeURIComponent('妇女库预约手机端测试服Test');

const wechatUrl = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=e9858d59-8c3b-4626-970a-f017ce8b594f';

// 配置jenkins实例，包含基本身份验证
const jenkinsIns = axios.create({
	baseURL: jenkinsUrl,
	auth: {
		username: jenkinsUsername,
		password: jenkinsApiToken,
	},
});

let times = ''
async function getLastBuildInfo (jobName) {
	try {
		// 发送请求并获取lastBuild/api/json数据
		const response = await jenkinsIns.get(`/job/${jobName}/lastBuild/api/json`);

		if (response?.data?.estimatedDuration) {
			const timestamp = response.data.estimatedDuration
			const seconds = Math.floor(timestamp / 1000) % 60;
			const minutes = Math.floor(timestamp / (1000 * 60));
			if (minutes) {
				times = `${minutes}分${seconds}秒`
			} else {
				times = `${seconds}秒`
			}
		}
	} catch (error) {
		console.error(`Error while fetching last build info: ${error.message}`);
	}
}

async function main () {
	const json = JSON.parse(process.env.commits);

	if (json) {
		try {
			await getLastBuildInfo(jobName);

			const sortedCommits = json.sort((a, b) => {
				const dateA = new Date(a.timestamp);
				const dateB = new Date(b.timestamp);
				return dateB - dateA; // 降序排序
			});

			const latestAuthorName = sortedCommits[0].author.name;

			// 将最新的提交信息存储到一个新的环境变量中
			process.env.latestAuthorName = latestAuthorName;

			let startMessage = ''
			startMessage += "<font color=\"info\">【" + json.JOB_NAME + "】</font>正在打包上传\n";
			startMessage += " >预计用时：<font color=\"comment\">" + times + "</font>\n";
			startMessage += " >部署人：<font color=\"comment\">" + latestAuthorName + "</font>\n";
			if (StringUtils.isNotEmpty(this.consoleUrl)) {
				startMessage += " >[查看控制台](" + this.consoleUrl + ")";
			}

			const data = {
				"msgtype": "markdown",
				"text": {
					"content": startMessage
				}
			};
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			};
			const response = await axios.post(wechatUrl, data, config);

			console.log(response);

			console.log("latestAuthorName", process.env.latestAuthorName);
			console.log("----------------------");
			console.log(process.env);
			console.log("======================");
		} catch (error) {
			console.log(error);
		}
	}
}

main()