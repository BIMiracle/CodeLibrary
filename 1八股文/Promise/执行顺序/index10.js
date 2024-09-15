const a = new Promise((resolve, reject) => {
  resolve('123')
})

console.log(Promise.resolve(a))
console.log(Promise.reject(a))

Promise.resolve(a).then(console.log)

Promise.reject(a).then(undefined, e => {
  e.then(console.log)
})














// Promise {<fulfilled>: '123'}
// Promise {<rejected>: Promise}
// 123
// 123
// Uncaught (in promise) Promise {<fulfilled>: '123'}

// resolve会调用.then 自动解  reject不会