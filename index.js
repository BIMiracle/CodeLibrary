function generateRandomString(length) {
	let result = ''
	const asciiStart = 48 // 包括数字0开始
	const asciiEnd = 122 // 包括小写字母z结束
	for (let i = 0; i < length; i++) {
		let charCode
		do {
			charCode = Math.floor(Math.random() * (126 - 48 + 1)) + 48
		} while (!(charCode >= 48 && charCode <= 57) && !(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122))
		result += String.fromCharCode(charCode)
	}
	return result
}
console.log(generateRandomString(10))
