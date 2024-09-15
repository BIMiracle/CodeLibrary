// 姓名 隐私字符串替换*
function generateString(name) {
  if (name.length == 1) {
		return name;
	}
	if (name.length == 2) {
		return name[0]+'*';
	}

  const firstChar = name[0];
  const lastChar = name[name.length - 1];
  const middlePart = '*'.repeat(name.length - 2); // 减去2，因为第一个字符已经占了一个位置

  return `${firstChar}${middlePart}${lastChar}`;
}

// 示例
const name0 = '啊';
const name1 = '汪峰';
const name2 = '张三丰';
const name3 = '古力娜扎';
const name4 = '迪丽热巴啊';

console.log(generateString(name0));  // 输出: 啊
console.log(generateString(name1));  // 输出: 汪*
console.log(generateString(name2));  // 输出: 张*丰
console.log(generateString(name3));  // 输出: 古**扎
console.log(generateString(name4));  // 输出: 迪***啊