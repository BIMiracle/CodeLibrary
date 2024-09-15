var length = 10;
function fn () {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);












// 10
// 2
// 第一次执行fn()，this指向window对象，输出10
// 第二次执行arguments[0]()，相当于arguments调用方法，this指向arguments，而这里传了两个参数，故输出arguments长度为2