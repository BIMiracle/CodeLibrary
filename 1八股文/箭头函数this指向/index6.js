var name = 'aa'
var obj = {
  name: 'bb',
  fun: function() {
    console.log(this.name);
  }
}
obj.fun()
new obj.fun()


















// bb
// undefined
// new操作符会创建一个新的空对象，并将这个新对象作为this传入函数fun。因为这个新对象是空的，所以this.name是undefined