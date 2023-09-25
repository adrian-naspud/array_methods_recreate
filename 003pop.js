const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

/** MDN
console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]


// function pushA(array, ...arguments) {
//   for (let i = 0; i < arguments.length; i++) {
//     array[array.length] = arguments[i]
//     console.log(array.length)
//     console.log(ani)
//   }
//   return array.length
//}

*/
// MY POP
function popA(array) {
  const newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArray[i] = array[i];
    console.log(array.length)
  }
  return newArray
}

console.log(popA(plants))
