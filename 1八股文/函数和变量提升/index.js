// 变量提升
console.log(a) // undefined
var a = 'hello'
/*
相当于
var a
console.log(a)
a = 'hello'
*/

// 函数提升
b()
function b () {
  console.log('b function')
}
/*
相当于
function b () {
  console.log('b function')
}
b()
*/



// // 函数提升 > 变量提升
console.log(show);

var show = function() {
  console.log('b')
}
function show () {
  console.log('a')
}
console.log(show);
/*
相当于
function show () {
  console.log('a')
}
console.log(show);
var show
show = function() {
  console.log('b')
}
console.log(show);
*/
