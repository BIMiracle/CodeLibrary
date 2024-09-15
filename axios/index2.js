const https = require('https');

const jenkinsUrl = 'jenkins.aisono.cn';
const jenkinsUsername = 'linjie';
const jenkinsApiToken = '11f7d10a43e7a444b3953adad5f338de51';
const jobName = encodeURIComponent('妇女库预约手机端测试服Test');

// 创建一个Base64编码的“用户名:API令牌”字符串
const authString = `${jenkinsUsername}:${jenkinsApiToken}`;
const authBuffer = Buffer.from(authString);
const base64Auth = authBuffer.toString('base64');

// 设置请求选项，包括身份验证头
const requestOptions = {
  hostname: jenkinsUrl,
  path: `/job/${jobName}/lastBuild/api/json`,
  method: 'GET',
  headers: {
    'Authorization': `Basic ${base64Auth}`,
  },
};

// 发送请求并处理响应
const req = https.request(requestOptions, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    const jsonData = JSON.parse(data);
		const timestamp = jsonData.estimatedDuration
		const seconds = Math.floor(timestamp / 1000) % 60;
		const minutes = Math.floor(timestamp / (1000 * 60));
		let times = ''
		if (minutes) {
			times = `${minutes}分${seconds}秒`
		}else{
			times = `${seconds}秒`
		}
		console.log(times);
    // console.log(jsonData);
  });
});

req.on('error', (error) => {
  console.error(`Error while fetching last build info: ${error.message}`);
});

req.end();
