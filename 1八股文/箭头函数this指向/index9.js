window.number = 2;
var obj = {
  number: 3,
  db1: (function() {
    console.log(this);
    this.number *= 4;
    console.log('1', this.number);
    return function() {
      console.log(this);
      this.number *= 5;
      console.log('2', this.number);
    }
  })()
}
var db1 = obj.db1;
db1();
obj.db1();
console.log(obj.number);
console.log(window.number);









// window
// 1 8
// window
// 2 40
// obj
// 2 15
// 15
// 40