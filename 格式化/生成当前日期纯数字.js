function formateDate() {
	const date = new Date()
	const year = date.getFullYear()
	let month = date.getMonth() + 1
	let day = date.getDate()
	let hour = date.getHours()
	let minute = date.getMinutes()
	let second = date.getSeconds()
	let millisecond = date.getMilliseconds()

	// 保证所有的时间单位都是两位数（01，02……09），以及毫秒是3位数
	month < 10 ? (month = '0' + month) : month
	day < 10 ? (day = '0' + day) : day
	hour < 10 ? (hour = '0' + hour) : hour
	minute < 10 ? (minute = '0' + minute) : minute
	second < 10 ? (second = '0' + second) : second
	if (millisecond < 10) {
		millisecond = '00' + millisecond
	} else if (millisecond < 100) {
		millisecond = '0' + millisecond
	}
	millisecond = millisecond.toString().substring(0, 1);

	return '' + year + month + day + hour + minute + second + millisecond
}

console.log(formateDate())