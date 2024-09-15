var myObject = {
  foo: "bar",
  func: function() {
    var self = this;
    console.log(this.foo);
    console.log(self.foo);
    (function() {
      console.log(this.foo);
      console.log(self.foo);
    }());
  }
};
myObject.func();













// bar
// bar
// undefined
// bar

// var self = this; 这个this是myObject.func()的myObject，同样self也是myObject