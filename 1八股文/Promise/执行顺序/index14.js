async function async1 () {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2 () {
  console.log("async2");
}
async1();
console.log('start')
















// async1 start
// async2
// start
// async1 end


// 首先执行函数中的同步代码async1 start，之后遇到了await，它会阻塞async1后面代码的执行，因此会先去执行async2中的同步代码async2，然后跳出async1
// 跳出async1函数后，执行同步代码start
// 在一轮宏任务全部执行完之后，再来执行await后面的内容async1 end