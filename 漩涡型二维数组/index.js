function changeType () {
	if (type == 3) {
		type = 0
	} else {
		type++
	}
}

let type = 0
function vortex (row, column) {
	let i = 0, j = 0

	const arr = []

	for (let f = 0; f < row; f++) {
		arr.push(new Array(column).fill(0))
	}

	let n = 0

	const way1 = {
		0: () => { j++ },
		1: () => { i++ },
		2: () => { j-- },
		3: () => { i-- }
	}
	const way2 = {
		0: () => { j-- },
		1: () => { i-- },
		2: () => { j++ },
		3: () => { i++ }
	}

	while (true) {
		if (n == 30) break
		n++

		if (arr[i] && arr[i][j] == 0) {
			// console.log('--:'+i,j,n);
			arr[i][j] = n

			way1[type]()
		} else {
			way2[type]()
			n--
			changeType()
			way1[type]()
		}
	}

	return arr
}
console.log(vortex(5, 6))