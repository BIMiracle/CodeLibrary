console.log("start of hard script");
const start = performance.now();

setTimeout(() => console.log('setTimeout'),0);
document.addEventListener("DOMContentLoaded", () => {
  console.log('fired event DOMContentLoaded')
});
document.addEventListener("click" , () => {
  console.log("fired event click")

  document.getElementById('a').innerText = Math.random('123')
});
// while(start + 1000 > performance.now()){console.log(1);};
console.log("end of hard script")

const end = performance.now()
console.log(end - start);