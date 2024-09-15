const worker = new Worker('worker.js');

var fileInput = document.querySelector('#fileInput');
var resizeWidthInput = document.querySelector('#resizeWidth');
var imageContainer = document.querySelector('#imageContainer');
var imageOrigin = document.querySelector('#imageOrigin');

let originFile = null
fileInput.addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (!file) {
    return;
  }
  originFile = file
  const reader = new FileReader();
  reader.onload = function(e) {
    let resizeWidth = Number(resizeWidthInput.value);
    if (isNaN(resizeWidth) || resizeWidth <= 0) {
      resizeWidth = 0
    }
    // 这里传给Worker的是Blob数据
    worker.postMessage({ data: e.target.result, width: resizeWidth });
  };
  // 使用 readAsArrayBuffer 占用最小
  reader.readAsArrayBuffer(file);
  // reader.readAsBinaryString(file); 2012 年 7 月 12 日起，该方法已从 W3C 工作草案废除
  // reader.readAsDataURL(file); base64 增加33%体积
  // reader.readAsText(file); 空间占用取决于实际的文本内容和编码方式 编码默认是'UTF-8'
});

worker.onmessage = function(e) {
  const blob = e.data;
  const url = URL.createObjectURL(blob);
  const img = new Image();
  img.src = url;
  imageContainer.innerHTML = '';
  imageContainer.appendChild(img);
  imageOrigin.innerHTML = '';

  const img2 = new Image();
  img2.src = URL.createObjectURL(originFile);
  imageOrigin.appendChild(img2);
};