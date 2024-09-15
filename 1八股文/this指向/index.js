var a = 4
var b = {
  a: 6,
  test: function() { console.log(this.a); },
  test2: () => { console.log(this.a) }
}
var test = b.test

test()
b.test()
b.test2()
console.log(this.a);
// 4
// 6
// 4
// 4


var name = 'aa'
var a = {
  name: 'bb',
  say () {
    console.log(this.name)
  }
}

var fun = a.say
fun() // aa
a.say() // bb

var b = {
  name: 'cc',
  say (fun) {
    fun()
  }
}
b.say(a.say) // aa
b.say(a.say.bind(a)) // bb
b.say = a.say
b.say() // cc


let x = 11 // 这里是let 所以 x不会挂载到window 换成var就可以
let obj = {
  x: 22,
  say: () => {
    console.log(this.x) // undefined
  }
}
obj.say()