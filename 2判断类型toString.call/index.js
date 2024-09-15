const all = {}

all['a1'] = '1'
all['a2_1'] = 1
all['a3'] = false
all['a4'] = null
all['a5'] = undefined
all['a6'] = Symbol(1)
all['a7'] = BigInt(123)

all['a2_2'] = Infinity
all['a2_3'] = -Infinity
all['a2_4'] = NaN
all['a2_5'] = 1.12
all['a2_6'] = -1.12
all['a2_7'] = Math.PI

class Person { }

all['a8'] = Object

all['a8_1_1'] = function a () { return "Hello world" }
all['a8_1_2'] = () => { return "Hello world" }
all['a8_1_3'] = new Function('return "Hello world"')
all['a8_2'] = function*() { }
all['a8_3'] = async function() { }
all['a8_4_1'] = {}
all['a8_4_2'] = new Person()
all['a8_5_1'] = [1, 2]
all['a8_5_2'] = new Array(1, 2)
all['a8_5_3'] = Array.of(3)
all['a8_5_4'] = Array.from([1, 2])
all['a8_6_1'] = /\\d/
all['a8_6_2'] = new RegExp("\\d")
all['a8_7'] = new Date()
all['a8_8'] = new Error("error")
all['a8_9'] = new Map()
all['a8_10'] = new WeakMap()
all['a8_11'] = new Set()
all['a8_12'] = new Promise(resolve => resolve(1))
all['a8_13'] = Math

if (typeof window === 'undefined') {
  all['a8_14'] = global
} else {
  all['a8_14'] = window
}

// 获取类型
const toRawType = (value) => Object.prototype.toString.call(value).slice(8, -1)

// 判断是否是精确的对象
const isPlainObject = (val) => toRawType(val) === "Object"

// 判断是否是数字
const isNumeric = (val) => toRawType(val) === "Number" && isFinite(val)

Object.entries(all).forEach(item => {
  // console.log(item[0], '\t', item[1]);
  // console.log(item[0], '\t', Object.prototype.toString.call(item[1]));
  // console.log(item[0], '\t', typeof item[1]);

  console.log(item[0], '\t', toRawType(item[1]));

  // console.log(item[0], '\t', isPlainObject(item[1]));
  // console.log(item[0], '\t', isNumeric(item[1]));
})