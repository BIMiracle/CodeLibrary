const allNumber = 10000000
const allNumber2 = 90000000
function a () {
  let a = []
  for (let i = 0; i < allNumber2; i++) {
    a.push(i * 2)
  }
  a.reverse()
}
function b () {
  let a = []
  for (let i = 0; i < allNumber; i++) {
    a.push(i * 2)
  }
  a.reverse()
}
function c () {
  let a = []
  for (let i = 0; i < allNumber; i++) {
    a.push(i * 2)
  }
  a.reverse()
}
function d () {
  let a = []
  for (let i = 0; i < allNumber; i++) {
    a.push(i * 2)
  }
  a.reverse()
}
function e () {
  let a = []
  for (let i = 0; i < allNumber; i++) {
    a.push(i * 2)
  }
  a.reverse()
}
function main () {
  console.time()
  a();
  b();
  c();
  d();
  e();
  console.timeEnd()
}


function yield () {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}

async function main2 () {
  console.time()
  // 创建要运行的函数数组
  const tasks = [a, b, c, d, e];

  while (tasks.length > 0) {
    // 让步给挂起的用户输入
    if (navigator.scheduling.isInputPending()) {
      await yield();
    } else {
      // 从任务数组中取出第一个任务
      const task = tasks.shift();

      // 运行任务
      task();
    }
  }
  console.timeEnd()
}

// main()