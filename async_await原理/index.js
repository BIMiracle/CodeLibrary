function* getResult(params) {

  yield new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(1);
          console.log(1);
      }, 1000);
  })

  yield new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(2);
          console.log(2);
      }, 500);
  })

  yield new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(3);
          console.log(3);
      }, 100);
  })
}
const gen = getResult()

// gen.next()
// gen.next()
// gen.next()
// 3 2 1 是根据定时器来执行

// 如果想让顺序执行就要嵌套
// gen.next().value.then(() => {
//   gen.next().value.then(() => {
//       gen.next();
//   });
// });
// 1 2 3

// 递归调用
function co(g) {
  const nextObj = g.next();
  if (nextObj.done) {
      return;
  }
  nextObj.value.then(()=>{
      co(g)
  })
}

co(gen)
