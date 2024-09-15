const axios = require('axios');

// Jenkins URL, 用户名和API Token
const jenkinsUrl = 'https://jenkins.aisono.cn';
const jenkinsUsername = 'linjie';
const jenkinsApiToken = '11f7d10a43e7a444b3953adad5f338de51';
// 替换为你的Jenkins作业名称
const jobName = encodeURIComponent('妇女库预约手机端测试服Test');

// 配置axios实例，包含基本身份验证
const axiosInstance = axios.create({
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
		const response = await axiosInstance.get(`/job/${jobName}/lastBuild/api/json`);

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
	await getLastBuildInfo(jobName);
	console.log(times);
}

main()