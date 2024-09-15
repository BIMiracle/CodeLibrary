const https = require('https');

const options = {
    host: 'jenkins.aisono.cn',
    path: encodeURIComponent('/job/妇女库预约手机端测试服Test/lastBuild/api/json'),
    method: 'GET',
		headers: {
			'Authorization': 'Basic ' + Buffer.from('linjie:tq@j4ckfUHgm7dt^@af@m#Md').toString('base64')
		}
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();