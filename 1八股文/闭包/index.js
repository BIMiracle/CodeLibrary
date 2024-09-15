function f1 () {
  var N = 0;
  function f2 () {
    N += 1;
    console.log(N);
  }
  return f2;
}
var result = f1();
result();
result();















// 1
// 2