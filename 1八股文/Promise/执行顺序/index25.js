Promise.resolve().then(() => {
  console.log('1');
  throw 'Error';
}).then(() => {
  console.log('2');
}).catch(() => {
  console.log('3');
  throw 'Error';
}).then(() => {
  console.log('4');
}).catch(() => {
  console.log('5');
}).then(() => {
  console.log('6');
});











// 1
// 3
// 5
// 6
// 无论是thne还是catch中，只要throw 抛出了错误，就会被catch捕获，如果没有throw出错误，就被继续执行后面的then