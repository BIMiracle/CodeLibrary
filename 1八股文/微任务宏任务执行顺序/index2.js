p1 = Promise.resolve()
p2 = p1.then(()=>{
  console.log(0);
  p3 = Promise.resolve(1)
  return p3
})
p4 = p2.then((res)=>{
  console.log(res);
})

setTimeout(() => {
  console.log(2); 
});

p5 = new Promise((resolve,reject)=>{
  console.log(3);
  resolve(4)
})

p6 = p5.then((res)=>{
  console.log(res);
  return new Promise((resolve,reject)=>{
    console.log(8);
    resolve(9)
  })
})
p7 = p6.then(()=>{
  console.log(5);
})
p8 = p7.then(()=>{
  console.log(6);
})
console.log(7);

















// 3 8 7 0 4 5 6 1 2