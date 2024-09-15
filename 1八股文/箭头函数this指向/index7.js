var obj = {
  say: function() {
    var f1 = () => {
      console.log("1", this);
    }
    f1();
  },
  say2: () => {
    console.log("2", this);
  },
  pro: {
    getPro: () => {
      console.log(this);
    }
  }
}
var o = obj.say;
o();
obj.say();
obj.pro.getPro();

var o2 = obj.say2;
o2();
obj.say2();









// 1 Window
// 1 obj
// Window
// 2 Window
// 2 Window