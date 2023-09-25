const ani = ['pigs', 'goats', 'sheep'];


function pushA(array, ...arguments) {
  for (let i = 0; i < arguments.length; i++) {
    array[array.length] = arguments[i]
    console.log(array.length)
    console.log(ani)
  }
  return array.length
}

let newAni = pushA(ani, 'elephant', 'piglet')

console.log(newAni)