var a = {
	n:1,
	valueOf :function(){
		return this.n++
	}
}
console.log(a === 1);
console.log(
	a == 1 &&
	a == 2 &&
	a == 3
)