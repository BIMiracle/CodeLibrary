const p = Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)
console.log(p);





















// 1
// Promise {<pending>}
// 当.then() 或者 .catch() 的参数不是一个function的时候，它会跳过该语句