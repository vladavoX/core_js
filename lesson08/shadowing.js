// var a = 100

// {
//   var a = 200
//   console.log(a) // 200
// }

// console.log(a) // 200

let b = 100
const c = 300

{
  let b = 200
  const c = 400
  console.log(b) // 200
  console.log(c) // 400
}

console.log(b) // 100
console.log(c) // 300
