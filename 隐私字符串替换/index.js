/**
 * 1*3 隐私化字符串
 * @param {string} string 要隐私化的字符串
 * @param {Number} retainLength 需要保留的开始和结尾位数
 * @returns 隐私化后的字符串
 */
function privacyString (string, retainLength = 1) {
	if (retainLength == 0) return string
	if (string.length <= 1) return string
	if (string.length == 2) return string[0] + '*'

	let firstChar, middlePart, lastChar
	if (string.length < (retainLength * 2 + 1)) {
		firstChar = string[0]
		middlePart = '*'.repeat(string.length - 2)
		lastChar = string.slice(-1)
	} else {
		firstChar = string.slice(0, retainLength)
		middlePart = '*'.repeat(string.length - (retainLength * 2))
		lastChar = string.slice(-retainLength)
	}
	return `${firstChar}${middlePart}${lastChar}`
}

const name0 = '1';
const name1 = '12';
const name2 = '123';
const name3 = '1234';
const name4 = '12345';
const name5 = '123456';
const name6 = '1234567';

const len = 2

console.log(privacyString(name0,len));
console.log(privacyString(name1,len));
console.log(privacyString(name2,len));
console.log(privacyString(name3,len));
console.log(privacyString(name4,len));
console.log(privacyString(name5,len));
console.log(privacyString(name6,len));