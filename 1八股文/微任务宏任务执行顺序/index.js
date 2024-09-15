function delay(duration){
  const start = Date.now()
  while (Date.now() - start < duration){}
}

const a = document.getElementById('a')
function changeText(){
  a.innerText = 'bbbbbbbbb'
  Promise.resolve(1).then(()=>{
    delay(3000)
  })
}