// 防抖
const debounce = (func, delay) => {
	let timeout

	const debounced = (...args) => {
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			func.apply(this, args)
		}, delay);
	}
	// 添加清理函数
	debounced.clear = function() {
		clearTimeout(timeout);
	}
	return debounced
}
const input = document.getElementById('a')
input.addEventListener('input', debounce(() => {
	console.log('输入的内容：', input.value);
}, 1000))


// 节流
const throttle = (func, delay) => {
	let lastTime = 0
	return (...args) => {
		const currentTime = new Date().getTime()
		if (currentTime - lastTime >= delay) {
			func.apply(this, args)
			lastTime = currentTime
		}
	}
}
// 节流 计时器版本
const throttle2 = (func, limit) => {
	let inThrottle;
	return (...args) => {
		if (!inThrottle) {
			func.apply(this, args);
			inThrottle = true;
			setTimeout(() => inThrottle = false, limit);
		}
	};
}

const scrollView = document.getElementsByClassName('b')[0]
scrollView.addEventListener('scroll', throttle(() => {
	console.log('11111');
}, 2000))

const scrollView2 = document.getElementsByClassName('b')[1]
scrollView2.addEventListener('scroll', throttle2(() => {
	console.log('22222');
}, 2000))
