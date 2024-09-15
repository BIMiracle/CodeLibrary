let i = 0
function getDate() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(i++)
		}, 1000)
	})
}

async function main() {
	for (let i = 0; i < 10; i++) {
		await getDate()
			.then(data => console.log(data))
			.catch(error => console.error('Error:', error))
	}
}
main()
