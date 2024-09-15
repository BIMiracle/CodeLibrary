function delay(duration){
  const start = Date.now()
  while (Date.now() - start < duration){}
}

function addDelay(){
  console.log("添加延时队列");
  setTimeout(() => {
    console.log("延时队列执行");
  }, 100);
  delay(2000)
}

function addNetWork(){
  console.log("添加网络队列");
  fetch('./1.json').then((res)=>{
    console.log("网络队列执行");
  })
  delay(2000)
}

function addInteraction() {
  console.log("添加交互队列");
  interaction.onclick= ()=>{
    console.log("交互队列执行");
  }
  delay(2000)
}

function addMicro() {
  console.log("添加微队列");
  new Promise((resolve)=>{resolve()}).then(()=>{
    console.log("微队列执行");
  })
  Promise.resolve().then(()=>{
    console.log("微队列执行2");
  })
  delay(2000)
}

begin.onclick = function (){
  addDelay()
  addNetWork()
  addInteraction()
  addMicro()
  console.log("==========");
}