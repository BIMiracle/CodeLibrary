class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach(fn => fn());
      }
    };

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

    let promise2 = new MyPromise((resolve, reject) => {
      if (this.state === 'fulfilled') {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            this.resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        }, 0);
      } else if (this.state === 'rejected') {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            this.resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        }, 0);
      } else if (this.state === 'pending') {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              this.resolvePromise(promise2, x, resolve, reject);
            } catch (err) {
              reject(err);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              this.resolvePromise(promise2, x, resolve, reject);
            } catch (err) {
              reject(err);
            }
          }, 0);
        });
      }
    });

    return promise2;
  }

  resolvePromise (promise2, x, resolve, reject) {
    if (promise2 === x) {
      return reject(new TypeError('Chaining cycle detected for promise'));
    }

    let called;
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
      try {
        let then = x.then;
        if (typeof then === 'function') {
          then.call(x, y => {
            if (called) return;
            called = true;
            this.resolvePromise(promise2, y, resolve, reject);
          }, r => {
            if (called) return;
            called = true;
            reject(r);
          });
        } else {
          resolve(x);
        }
      } catch (err) {
        if (called) return;
        called = true;
        reject(err);
      }
    } else {
      resolve(x);
    }
  }
}

const p = new MyPromise((resolve, reject) => {
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