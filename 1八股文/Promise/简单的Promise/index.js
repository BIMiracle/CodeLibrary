class SimplePromise {
  constructor(executor) {
    // 初始状态为 pending
    this.status = 'pending';
    
    // 用于保存成功和失败的回调函数
    this.onResolve = null;
    this.onReject = null;

    // 用于保存 Promise 成功的值或失败的原因
    this.value = null;
    this.reason = null;

    // 执行传入的 executor 函数
    executor(this.resolve.bind(this), this.reject.bind(this));
  }

  // 成功时调用的方法
  resolve(value) {
    if (this.status === 'pending') {
      // 更新状态为 resolved
      this.status = 'resolved';
      // 保存成功的值
      this.value = value;

      // 执行成功回调
      if (this.onResolve) {
        this.onResolve(value);
      }
    }
  }

  // 失败时调用的方法
  reject(reason) {
    if (this.status === 'pending') {
      // 更新状态为 rejected
      this.status = 'rejected';
      // 保存失败的原因
      this.reason = reason;

      // 执行失败回调
      if (this.onReject) {
        this.onReject(reason);
      }
    }
  }

  // then 方法用于注册成功和失败的回调
  then(onResolve, onReject) {
    if (this.status === 'resolved') {
      // 如果 Promise 已经成功，直接执行成功回调
      onResolve(this.value);
    } else if (this.status === 'rejected') {
      // 如果 Promise 已经失败，直接执行失败回调
      onReject(this.reason);
    } else {
      // 如果 Promise 还在 pending 状态，保存回调函数
      this.onResolve = onResolve;
      this.onReject = onReject;
    }
  }
}

// 示例使用
const myPromise = new SimplePromise((resolve, reject) => {
  // 模拟异步操作
  setTimeout(() => {
    const random = Math.random();
    if (random > 0.5) {
      resolve('Promise resolved');
    } else {
      reject('Promise rejected');
    }
  }, 1000);
});

myPromise.then(
  (value) => {
    console.log('Success:', value);
  },
  (reason) => {
    console.log('Error:', reason);
  }
);
