setTimeout(() => console.log('代码开始执行'), 0)
new Promise((resolve, reject) => {
  console.log('开始for循环');
  for (let i = 0; i < 12; i++) {
    console.log(i);
    i == 9 && resolve()
  }
}).then(() => console.log('执行then函数'))
console.log('代码执行结束');