function a() {
  console.log(b) // -> 10
  c()
  function c() {
    console.log(b) // -> 10
  }
}
var b = 10
a()

function aa() {
  var bb = 100
  console.log(bb) // -> 100
  cc()
  function cc() {
    console.log(bb) // -> 100
  }
}

aa()
// console.log(bb) // -> bb is not defined
