console.log(b) // -> undefined
// console.log(a) // -> ReferenceError: Cannot access 'a' before initialization

let a = 10
console.log(a)

// no error
var b = 100
var b = 20

// SyntaxError: Cannot redeclare block-scoped variable 'c'
// let c = 20
// let c = 200

// SyntaxError: Cannot redeclare block-scoped variable 'c'
// let c = 20
// var c = 200

let d
d = 100
console.log(d)

// SyntaxError: 'const' declarations must be initialized
// const e
// e = 1000

// TypeError: Assignment to constant variable
// const e = 1000
// e = 1

// no error
const e = 1000
