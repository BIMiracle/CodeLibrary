// 导出的数据
function generateData() {
  const names = ["张三", "李四", "王五", "赵六", "孙七", "周八", "吴九", "郑十"];
  const data = [["姓名", "年龄"]];
  for(let i = 0; i < 1000000; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const age = Math.floor(Math.random() * 100) + 1;
    data.push([name, age]);
  }
  return data;
}
function mainOut(){
  // 创建工作表
  var ws = XLSX.utils.aoa_to_sheet(generateData());
  // 创建工作簿并添加工作表
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  // 将工作簿转换为二进制字符串
  var wbout = XLSX.write(wb, {
    bookType: 'xlsx',
    bookSST: true,
    type: 'binary'
  });
  // 将二进制字符串转换为ArrayBuffer
  function s2ab (s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  }
  var buffer = s2ab(wbout);
  // 将ArrayBuffer转换为Blob并通过postMessage返回
  var blob = new Blob([buffer], { type: "application/octet-stream" });
  // 创建Blob URL
  var url = URL.createObjectURL(blob);
  // 创建一个a标签，设置其href和download属性以下载文件
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = url;
  a.download = '导出.xlsx';
  a.click();
  // 释放Blob URL
  URL.revokeObjectURL(url);
}

function exportExcel () {

  const isCheck = document.getElementById('mainCheck')
  if (isCheck.checked) {
    mainOut()
    return
  }
  // main thread
  var worker = new Worker('worker.js');

  // 接收Web Worker返回的Blob对象
  worker.onmessage = function(e) {
    var blob = e.data;
    // 创建Blob URL
    var url = URL.createObjectURL(blob);
    // 创建一个a标签，设置其href和download属性以下载文件
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = '导出.xlsx';
    a.click();
    // 释放Blob URL
    URL.revokeObjectURL(url);
  };

  // 向Worker发送消息，触发文件的创建
  worker.postMessage('start');
}