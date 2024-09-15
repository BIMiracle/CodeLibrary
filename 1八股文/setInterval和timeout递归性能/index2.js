function timeout(){
  setTimeout(() => {
    console.timeEnd()
    console.log(1);
    console.time()
    timeout()
  }, 1000);
}
timeout()