const worker = new Worker('worker.js');

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

function drawToCanvas () {
  context.canvas.width = video.videoWidth;
  context.canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

  // 移除seeked事件的监听器
  video.removeEventListener('seeked', drawToCanvas);
  // 将视频时间重置为0
  video.currentTime = 0;

  if ('OffscreenCanvas' in window) {
    const frame = context.getImageData(0, 0, video.videoWidth, video.videoHeight);
    const worker = new Worker('worker.js');
    worker.postMessage(frame, [frame.data.buffer]);
  } else {
    canvas.toBlob(function(blob) {
      const formData = new FormData();
      formData.append("image", blob, "coverImage.png");

      console.log(blob);

      // 接下来你可以将formData用于文件上传等操作
    }, "image/png");
  }
  // const img = canvas.toDataURL();
  // console.log(img);  // 这就是你的封面图像
}

function seekToMiddle () {
  video.currentTime = video.duration / 2;
  video.removeEventListener('loadedmetadata', seekToMiddle);
}

video.addEventListener('loadedmetadata', seekToMiddle);
video.addEventListener('seeked', drawToCanvas);
