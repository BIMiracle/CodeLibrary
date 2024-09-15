const o = new Array(1, 2, 3)
// [1, 2, 3]
console.log(o)

function myNew (Constructor, ...args) {
  // 创建一个空对象，该对象的原型为构造函数的原型对象
  var obj = Object.create(Constructor.prototype);
  // 将构造函数的 this 绑定到该空对象上，执行构造函数的代码
  var result = Constructor.apply(obj, args);
  // 如果构造函数有显式返回一个对象，则返回该对象，否则返回空对象
  return (typeof result === 'object' && result !== null) ? result : obj;
}

const o2 = myNew(Array, 3, 4, 5)
// [3,4,5]
console.log(o2)