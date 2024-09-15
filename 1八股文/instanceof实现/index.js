// true
console.log([] instanceof Array)
// true
console.log([] instanceof Object)
// false
console.log([] instanceof Number)

function myInstanceOf (obj, constructor) {
  let proto = Object.getPrototypeOf(obj); // 获取 obj 的原型
  while (proto) { // 当 .prototype 为 null时 返回false
    if (proto === constructor.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto); // 获取原型链上的下一个原型
  }
  return false;
}
// true
console.log(myInstanceof([], Array))
// true
console.log(myInstanceof([], Object))
// false
console.log(myInstanceof([], Number))