var fileInput = document.getElementById('fileInput');
var hashValueElem = document.getElementById('hashValue');

fileInput.addEventListener('change', function(event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  // 使用 SparkMD5 计算文件哈希值
  var blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
    chunkSize = 2097152,                              // Read in chunks of 2MB
    chunks = Math.ceil(file.size / chunkSize),
    currentChunk = 0,
    spark = new SparkMD5.ArrayBuffer();

    console.time()
  reader.onload = function(e) {
    // console.log('read chunk nr', currentChunk + 1);
    spark.append(e.target.result);                   // Append array buffer
    currentChunk++;

    if (currentChunk < chunks) {
      loadNext();
    } else {
      //    console.log('finished loading');
      console.timeEnd()
      hashValueElem.textContent = 'MD5 hash: ' + spark.end();
      //    console.info('computed hash', spark.end());  // Compute hash
    }
  };

  function loadNext () {
    var start = currentChunk * chunkSize,
      end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;

    reader.readAsArrayBuffer(blobSlice.call(file, start, end));
  }

  loadNext();
});