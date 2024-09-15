self.onmessage = function(e) {
  const arrayBuffer = e.data.data;
  let resizeWidth = e.data.width;
  const blob = new Blob([arrayBuffer]);
  createImageBitmap(blob)
    .then(bitmap => {
      let resizeHeight = 0
      if (resizeWidth == 0 || bitmap.width <= resizeWidth) {
        resizeWidth = bitmap.width
        resizeHeight = bitmap.height
      } else {
        resizeHeight = Math.floor(bitmap.height * (resizeWidth / bitmap.width));
      }
      const canvas = new OffscreenCanvas(resizeWidth, resizeHeight);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(bitmap, 0, 0, resizeWidth, resizeHeight);
      canvas.convertToBlob({ quality: 0.8, type: 'image/jpeg' })
        .then(blob => {
          self.postMessage(blob);
        });
    });
};