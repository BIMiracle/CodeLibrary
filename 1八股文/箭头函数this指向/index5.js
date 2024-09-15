'use strict';
function a () {
  console.log(this);
}
a.call(null);
a.call(undefined);




















// null
// undefined
// 在严格模式中，null 就是 null，undefined 就是 undefined