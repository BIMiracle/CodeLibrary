function a () {
  console.log(this);
}
a.call(null);






















// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// ECMAScript262规范规定：
// 如果第一个参数传入的对象调用者是null或者undefined，call方法将把全局对象（浏览器上是window对象）作为this的值