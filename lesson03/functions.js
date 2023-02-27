var x = 1 // var x = 1
a() // -> 10
b() // -> 20
console.log(x) // -> 1

function a() {
  var x = 10 // different var x = 10
  console.log(x) // -> 10
}

function b() {
  var x = 20 // different var x = 20
  console.log(x) // -> 20
}
