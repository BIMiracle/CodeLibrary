/**
 * 数组去重
 * 两个属性相同的对象也认为是重复的
 * @param {Array} arr 
 * @return {Array}
 */
function uniqueArray (arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    const item1 = arr[i];
    let isFind = false
    for (let j = 0; j < result.length; j++) {
      const item2 = result[j];
      if (equals(item1, item2)) {
        isFind = true
        break
      }
    }
    if (!isFind) {
      result.push(item1)
    }
  }
  return result
}

function isPrimitive (value) {
  // return value === null || (typeof value !== 'object' && typeof value !== 'function')
  return value === null || !['object', 'function'].includes(typeof value)
}

function equals (value1, value2) {
  if (isPrimitive(value1) || isPrimitive(value2)) {
    // 这里影响的是arr4 和 arr5的区别
    // return value1 === value2
    return Object.is(value1, value2)
  }

  const entries1 = Object.entries(value1)
  const entries2 = Object.entries(value2)
  if (entries1.length !== entries2.length) {
    return false
  }
  for (const [key, value] of entries1) {
    if (!value2.hasOwnProperty(key) || !equals(value2[key], value)) {
      return false
    }
  }
  return true
}

const a = {
  a: 1,
  b: 2,
  c: {
    d: 3
  }
}
const b = {
  b: 2,
  a: 1,
  c: {
    d: 3
  }
}
console.log(equals(a, b));

const arr = [
  { a: 1, b: 2 },
  { b: 2, a: 1 },
]
const arr2 = [
  { a: 1, b: undefined },
  { a: 1, c: undefined },
]
const arr3 = [
  { a: 1, b: undefined },
  { a: 1, b: undefined },
]
const arr4 = [
  { a: 1, b: +0 },
  { a: 1, b: -0 },
]
const arr5 = [
  { a: 1, b: NaN },
  { a: 1, b: NaN },
]
console.log('arr', uniqueArray(arr));
console.log('arr2', uniqueArray(arr2));
console.log('arr3', uniqueArray(arr3));
console.log('arr4', uniqueArray(arr4));
console.log('arr5', uniqueArray(arr5));