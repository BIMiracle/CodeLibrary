const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class MyPromise {
  #state = PENDING
  #result = undefined
  #handles = []
  constructor(executor) {
    const resolve = (data) => this.#changeState(FULFILLED, data)
    const reject = (reason) => this.#changeState(REJECTED, reason)
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  #changeState (state, result) {
    if (this.#state !== PENDING) return
    this.#state = state
    this.#result = result
    this.#run()
  }
  #run () {
    if (this.#state === PENDING) return
    while (this.#handles.length) {
      const { resolve, reject, onFulfilled, onRejected } = this.#handles.shift()
      if (this.#state === FULFILLED) {
        if (typeof onFulfilled === 'function') {
          resolve(onFulfilled(this.#result))
        } else {
          resolve(this.#result)
        }
      } else if (this.#state === REJECTED) {
        if (typeof onRejected === 'function') {
          reject(onRejected(this.#result))
        } else {
          reject(this.#result)
        }
      }
    }
  }
  then (onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this.#handles.push({
        resolve,
        reject,
        onFulfilled,
        onRejected
      })
      this.#run()
    })
  }
}

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1)
  }, 1000);
})
p.then((res) => {
  console.log('完成1', res);
}, (err) => {
  console.log('失败1', err);
}).then((res) => {
  console.log('完成1-1', res);
}, (err) => {
  console.log('失败1-1', err);
})
p.then((res) => {
  console.log('完成2', res);
}, (err) => {
  console.log('失败2', err);
})