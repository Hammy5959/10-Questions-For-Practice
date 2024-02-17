`Calculate the sum of numbers within an array`;

function sumArray(arr: Array<number>):number {
  let sumArray = arr.reduce((a, b) => a + b);
  return sumArray;
}
let numArray: Array<number> = [2, 3, 45, 67, 8, 65];

console.log(sumArray(numArray));
