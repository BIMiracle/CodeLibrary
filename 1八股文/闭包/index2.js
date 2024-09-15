for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}





















// 3
// 3
// 3
// 是3的原因是因为最后依次遍历i是等于3的，只是方法里面已经不执行了，但是settimeout延时打印