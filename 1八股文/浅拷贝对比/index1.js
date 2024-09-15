let a= {z:5,y:{x:8},w:{r:10}}
let b= {...a}
b.z = 6
b.y.x = 9
b.w = {r:11}

console.log(a);
console.log(a.y === b.y);
console.log(a.w === b.w);
console.log(a === b);