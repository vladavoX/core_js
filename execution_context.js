// We add this file into Call Stack

// There are two stages of Execution Context in JavaScript
// First stage is Memory allocation
// Second stage is Code execution

// in first stage, n is saved to memory with value 'undefined'
// in second stage, n get value of 2
var n = 2

// in first stage, function is saved in memory, as entire function
function square(num) {
  // in first stage, num is saved to memory with value 'undefined'. In second stage it gets value of num
  var ans = num * num // in first stage, ans is saved to memory with value 'undefined'. In second stage it gets value of num * num
  return ans
}

// in first stage, square2 and square4 are saved to memory with values 'undefined'
// in second stage, they get values of square(n) and square(4) and functions are called
// because functions are called they fill the Call Stack
var square2 = square(n)
var square4 = square(4)
// once the function finishes executing, it is removed from the Call Stack

// once we reach the end of JS file, the Call Stack is empty
