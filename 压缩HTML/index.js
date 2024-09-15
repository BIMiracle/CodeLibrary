const fs = require('fs');
const path = require('path');
const htmlMinifier = require('html-minifier');

const inputPath = path.join(__dirname, 'input.html');
const outputPath = path.join(__dirname, 'output.html');

// 检查文件是否存在
if (!fs.existsSync(inputPath)) {
  console.error(`File ${inputPath} does not exist.`);
  return;
}

// 读取HTML文件内容
const input = fs.readFileSync(inputPath, 'utf8');

// 格式化HTML代码为一行
const output = htmlMinifier.minify(input, {
  collapseWhitespace: true,
  removeComments: true
});

// 将格式化后的代码写入输出文件
fs.writeFileSync(outputPath, output);

console.log(`File ${outputPath} has been minified and saved.`);
