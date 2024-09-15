const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class MyPromise {
  #state = PENDING
  #result = undefined
  #handles = []
  constructor(executor) {
    const resolve = (v) => this.#changeState(FULFILLED, v)
    const reject = (r) => this.#changeState(REJECTED, r)
    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
  #changeState (state, result) {
    if (this.#state !== PENDING) return
    this.#state = state
    this.#result = result
    // this.#run()
  }
  then (onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this.#handles.push({
        resolve,
        reject,
        onFulfilled,
        onRejected
      })
    })
  }
}

const p = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   reject(1)
  // }, 1000);
  resolve('ok')
})
p.then((res) => {
  console.log('完成1', res);
}, (err) => {
  console.log('失败1', err);
})
// .then((res) => {
//   console.log('完成1-1', res);
// }, (err) => {
//   console.log('失败1-1', err);
// })
// p.then((res) => {
//   console.log('完成2', res);
// }, (err) => {
//   console.log('失败2', err);
// })