// // Block
// {
//   // Compound Statement
//   var a = 10
//   console.log(a) // -> 10
// }

// if (true) {
//   // Compound Statement
//   var b = 20
//   console.log(b) // -> 20
// }

{
  // Hoisted in Global Scope
  var a = 10
  // Hoisted in Block Scope
  let b = 20
  const c = 30

  console.log(a) // -> 10
  console.log(b) // -> 20
  console.log(c) // -> 30
}

console.log(a) // -> 10
// console.log(b) // -> ReferenceError: b is not defined
// console.log(c) // -> ReferenceError: c is not defined
