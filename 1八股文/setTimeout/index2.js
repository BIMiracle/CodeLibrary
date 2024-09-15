function test() {
  setTimeout( () => console.log('timeout'));
  onmessage = (evt) => console.log('message');
  postMessage('', '*');
}
console.log('at page load');
test();

setTimeout( () => {
  console.log('after page load');
  test();
}, 1000 );

/* results in Firefox:
at page load
message
timeout
after page load
timeout
message

Chrome will always print "message" first, but because they have a 2ms min timeout on setTimeout

now Chrome always print "timeout" first
*/