'use strict'
const a = () => {
  console.log(this);
}
function b () {
  console.log(this);
}
a()
b()



// 没有use strict
// node
// {}
// global

// 浏览器
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// use strict
// node
// {}
// undefined

// 浏览器
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// undefined