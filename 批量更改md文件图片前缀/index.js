const fs = require('fs');
const path = require('path');

const directoryPath = 'F:/BaiduSyncdisk/Blog'; // 指定目录路径
const prefixToMatch = 'https://gcore.jsdelivr'; // 要匹配的前缀
const prefixToReplace = 'https://cdn.jsdelivr'; // 要修改的前缀

// 遍历指定目录下的所有文件
fs.readdir(directoryPath, function (err, files) {
  if (err) {
    console.log('Unable to read directory: ' + err);
    return;
  }
  
  files.forEach(function (file) {
    const filePath = path.join(directoryPath, file);
    
    // 只处理Markdown文件
    if (path.extname(file) === '.md') {
      fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
          console.log('Unable to read file: ' + err);
          return;
        }
        
        // 替换图片链接前缀
        const newData = data.replace(new RegExp(prefixToMatch, 'g'), prefixToReplace);
        
        // 写入修改后的数据到文件
        fs.writeFile(filePath, newData, 'utf8', function (err) {
          if (err) {
            console.log('Unable to write file: ' + err);
            return;
          }
          
          console.log('File updated: ' + filePath);
        });
      });
    }
  });
});
