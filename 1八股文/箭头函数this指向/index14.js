function a (xx) {
  this.x = xx;
  return this
};
var x = a(5);
var y = a(6);

console.log(x.x)
console.log(y.x)

















// undefined 因为此时调用的x是6 是windows上的x属性，如果改个名字z，调用z.x就是6,因为执行顺序6赋给了windows上的x
// 6