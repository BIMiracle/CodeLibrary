function generateString(name) {
  if (name.length <= 1) {
		return name;
	}
	if (name.length == 2) {
		return name[0]+'*';
	}

	if (name.length < 5) {
		const firstChar = name[0];
		const lastChar = name[name.length - 1];
		const middlePart = '*'.repeat(name.length - 2);
		return `${firstChar}${middlePart}${lastChar}`;
	}else{
		const firstChar1 = name[0];
		const firstChar2 = name[1];
		const lastChar1 = name[name.length - 2];
		const lastChar2 = name[name.length - 1];
		const middlePart = '*'.repeat(name.length - 4);
		return `${firstChar1}${firstChar2}${middlePart}${lastChar1}${lastChar2}`;
	}
}

// 示例
const name0 = 'a';
const name1 = 'ax';
const name2 = 'ax1';
const name3 = 'ax16';
const name4 = 'ax165';
const name5 = 'ax1656';
const name6 = 'ax165675';

console.log(generateString(name0));
console.log(generateString(name1));
console.log(generateString(name2));
console.log(generateString(name3));
console.log(generateString(name4));
console.log(generateString(name5));
console.log(generateString(name6));