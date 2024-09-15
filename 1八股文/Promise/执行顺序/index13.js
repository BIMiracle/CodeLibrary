function runAsync (x) {
  const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
  return p
}
Promise.race([runAsync(1), runAsync(2), runAsync(3)])
  .then(res => console.log('result: ', res))
  .catch(err => console.log(err))



















// 1
// 'result: ' 1
// 2
// 3

// race中 then只会捕获第一个成功的方法，其他的函数虽然还会继续执行，但是不是被then捕获了