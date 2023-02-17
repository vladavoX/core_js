var a = 10

function b() {
  console.log
  var x = 10
}

console.log(window.a) // -> 10
console.log(a) // -> 10
console.log(this.a) // -> 10
