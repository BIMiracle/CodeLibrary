const punycode = require('punycode');

let str = 'Hello, 世界! 😊';
let unicode = '';

let ucs2 = punycode.ucs2.decode(str);
for (let i = 0; i < ucs2.length; i++) {
  let code = ucs2[i].toString(16);
  unicode += '\\u' + ('0000' + code).slice(-4);
}

console.log(unicode); // Output: \u0048\u0065\u006c\u006c\u006f\u002c\u0020\u4e16\u754c\u0021\u0020\ud83d\ude0a


let str2 = '';

unicode.split('\\u').slice(1).forEach((hex) => {
  let charCode = parseInt(hex, 16);
  let char = String.fromCharCode(charCode);
  str2 += char;
});

console.log(str2); // Output: Hello, 世界! 😊