// 方法一
a = a + b
b = a - b
a = a - b
// 乘法和除法
// a = a * b;
// b = a / b;
// a = a / b;

// 方法二
a = [b, b = a][0]

// 方法三
[a, b] = [b, a]

// 方法四 异或
a = a ^ b
b = a ^ b
a - a ^ b