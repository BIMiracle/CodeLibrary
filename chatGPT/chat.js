const apiKey = 'sk-n4XXXXXXXXXX'
const model = 'gpt-3.5-turbo'
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
		const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${apiKey}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				model: model,
				messages: [
					{
						role: 'user',
						content: message,
					},
				],
				temperature: 0.7,
			}),
		})
		return response.json().then(data => {
			console.warn(data.choices[0].message)
			return data.choices[0].message.content
		})
	} catch (e) {
		console.error(e)
		return 'Something went wrong'
	}
}

$('#send').click(async () => {
	const res = await main($('#text').val())
	console.log(res)
})
