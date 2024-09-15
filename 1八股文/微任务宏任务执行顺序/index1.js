p1 = Promise.resolve()
p2 = p1.then(() => {
  console.log(0);
  p3 = Promise.resolve(1)
  return p3
})
p2.then((res) => {
  console.log(res);
})

setTimeout(() => {
  console.log(2);
});

p5 = new Promise((resolve, reject) => {
  console.log(3);
  resolve(4)

  p9 = new Promise((resolve, reject) => {
    console.log(8);
    resolve(9)
  })
})
var p11
p9.then((res) => {
  console.log(res);
  p1.then(()=>{
    console.log(10);
  })
  p11 = new Promise((resolve, reject) => {
    resolve(12)
  }).then(console.log(11))
})

p6 = p5.then((res) => {
  p11.then((res) => {
    console.log(res);
  })
  console.log(res);
})
p7 = p6.then(() => {
  console.log(5);
})
p7.then(() => {
  console.log(6);
})
console.log(7);