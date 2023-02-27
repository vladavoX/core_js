console.log(a) // -> undefined. "a" is allocated in memory but it doesn't have value
var a = 7
console.log(a) // -> 7. "a" is allocated in memory, and it has value of 7

var b
console.log(b) // -> undefined. We never store it a value, so it's value is always 'undefined'
b = 10

if (b === undefined) console.log('b is undefined')
if (b !== undefined) console.log('b is not undefined')

// console.log(x) // -> x is not defined. "x" is not allocated in memory, so it can't be found at all

var c
console.log(c)
c = 10
console.log(c)
c = 'hello world'
console.log(c)
