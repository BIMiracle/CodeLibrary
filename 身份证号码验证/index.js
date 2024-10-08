function validator(val) {
	const aCity = {
		11: '北京',
		12: '天津',
		13: '河北',
		14: '山西',
		15: '内蒙古',
		21: '辽宁',
		22: '吉林',
		23: '黑龙江',
		31: '上海',
		32: '江苏',
		33: '浙江',
		34: '安徽',
		35: '福建',
		36: '江西',
		37: '山东',
		41: '河南',
		42: '湖北',
		43: '湖南',
		44: '广东',
		45: '广西',
		46: '海南',
		50: '重庆',
		51: '四川',
		52: '贵州',
		53: '云南',
		54: '西藏',
		61: '陕西',
		62: '甘肃',
		63: '青海',
		64: '宁夏',
		65: '新疆',
		71: '台湾',
		81: '香港',
		82: '澳门',
		91: '国外',
	}
	if (val) {
		var iSum = 0
		var year = new Date().getFullYear()
		if (!/^\d{17}(\d|x)$/i.test(val)) {
			return false
		}
		val = val.replace(/x$/i, 'a')
		if (aCity[parseInt(val.substr(0, 2))] == null) {
			return false
		}
		if (aCity[parseInt(val.substr(6, 9))] > year) {
			return false
		}
		const sBirthday = val.substr(6, 4) + '-' + Number(val.substr(10, 2)) + '-' + Number(val.substr(12, 2))
		var d = new Date(sBirthday.replace(/-/g, '/'))
		if (sBirthday != d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()) {
			return false
		}
		for (var i = 17; i >= 0; i--) {
			iSum += (Math.pow(2, i) % 11) * parseInt(val.charAt(17 - i), 11)
		}
		if (iSum % 11 != 1) {
			return false
		}
		aCity[parseInt]
		const str = val.substr(val.length - 2, 1)
		if (str % 2 != 0) {
			return false
		}
		return true
	} else {
		return false
	}
}