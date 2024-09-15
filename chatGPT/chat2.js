const apiKey = 'sk-n4XXXXXXXXXX'
const model = 'gpt-3.5-turbo'
const Puid = 'user-nIGPAe6Fw433bayiKSGMQWKL:1679557722-772gohHFgh625dgLLvo36muNZUJdpLxhLdo7c9Z8VBg='
// async function main(){
// 	try {
// 		const {data} = await axios({
// 			method:'POST',
// 			url: 'https://api.openai.com/v1/chat/completions',
// 			headers: {
// 				Authorization: `Bearer ${apiKey}`,
// 				"Content-Type": "application/json",
// 			},
// 			data: JSON.stringify({
// 				model: 'gpt-3.5-turbo',
// 				messages: [
// 					{
// 						"role": "user",
// 						"content": $('#text').val()
// 					}
// 				],
// 				temperature: 0.7
// 			}),
// 		})
// 		return data.choices[0].message.content
// 	} catch (error) {
// 		console.error(error)
// 		return "Something went wrong"
// 	}
// }

const main = async message => {
	try {
		// 构造XMLHttpRequest对象
		var xhr = new XMLHttpRequest()

		// 设置请求方式、URL、请求体
		xhr.open('POST', 'http://192.168.186.129/api/send-message')
		xhr.setRequestHeader('Content-Type', 'application/json')
		xhr.setRequestHeader('Authorization', `Bearer ${apiKey}`)
		xhr.send(JSON.stringify({ message: '你好' }))

		// 处理响应
		xhr.onload = function () {
			if (xhr.status === 200) {
				console.log(xhr.responseText)
			} else {
				console.error(xhr.statusText)
			}
		}

		xhr.onerror = function () {
			console.error('请求出错')
		}
	} catch (e) {
		console.error(e)
		return 'Something went wrong'
	}
}

$('#send').click(async () => {
	const res = await main($('#text').val())
	console.log(res)
})
