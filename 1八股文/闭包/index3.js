for (var i = 0; i < 3; i++) {
  ((i) => {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  })()
}
// 输出什么，如何变成输出 0 1 2


















// undefined
// undefined
// undefined

// 把i传入括号里面即可打印 0 1 2利用闭包保存变量