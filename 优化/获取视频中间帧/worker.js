self.onmessage = function(e) {
  const imageData = e.data;
  const offscreenCanvas = new OffscreenCanvas(imageData.width, imageData.height);
  offscreenCanvas.getContext('2d').putImageData(imageData, 0, 0);

  offscreenCanvas.convertToBlob().then(blob => {
    let formData = new FormData();
    formData.append("image", blob);
    console.log(blob);
    // 上传
  });
};