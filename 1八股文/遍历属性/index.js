const obj = { a: 1, b: 2 }
Object.defineProperty(obj, 'c', { value: 3, enumerable: false });
obj[Symbol('key')] = 4;

for (var prop in obj) {
	console.log(prop) // 输出 a, b
}
console.log('------');
console.log(Object.keys(obj)); // ['a', 'b']
console.log('------');
console.log(Object.getOwnPropertyNames(obj)); // ['a', 'b', 'c'] 可以遍历不可枚举类型
console.log('------');
console.log(Reflect.ownKeys(obj)); // ['a', 'b', 'c', Symbol(key)] 可以遍历 不可枚举类型+symbol


// 遍历值
Object.values(obj)
// 遍历键和值
Object.entries(obj)