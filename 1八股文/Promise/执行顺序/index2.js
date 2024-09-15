const promise1 = new Promise((resolve, reject) => {
  console.log('promise1')
  resolve('resolve1')
})
const promise2 = promise1.then(res => {
  console.log(res)
})
console.log('1', promise1);
console.log('2', promise2);

















// promise1
// 1 Promise {<fulfilled>: 'resolve1'} [[PromiseState]]: "fulfilled"[[PromiseResult]]: "resolve1"
// 2 Promise {<pending>} [[PromiseState]]: "pending"[[PromiseResult]]: undefined
// resolve1