` Create a function that reverses an array`;
function reverseArray(arr: Array<number>): Array<number> {
  let arrReverse = arr.reverse();
  return arrReverse;
}
let numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(reverseArray(numbers));
