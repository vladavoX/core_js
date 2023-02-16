getName() // -> Vladimir Aleksic
console.log(x) // -> undefined
console.log(getName) // -> function getName() { console.log('Vladimir Aleksic') }

var x = 7

function getName() {
  console.log('Vladimir Aleksic')
}

getName() // -> Vladimir Aleksic
console.log(x) // -> 7
console.log(getName) // -> function getName() { console.log('Vladimir Aleksic') }
