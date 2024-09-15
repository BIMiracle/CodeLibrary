function vortex (n, m) {
	const numArr = new Array(n).fill(0).map(() => new Array(m).fill(0))

	let i = 0 // 行号
	let j = 0 // 列号
	let count = 1
	let stepI = 0 // 每次i增加的数字
	let stepJ = 1 // 每次j增加的数字

	function hasBlock () {
		return !numArr[i] || numArr[i][j] != 0
	}
	while (count <= n*m) {
		numArr[i][j] = count++

		i += stepI
		j += stepJ

		if (hasBlock()) {
			i -= stepI
			j -= stepJ
			if (stepI == 0) {
				stepI = stepJ
				stepJ = 0
			} else {
				stepJ = -stepI
				stepI = 0
			}
			i += stepI
			j += stepJ
		}
	}
	return numArr
}

console.log(vortex(5, 6));