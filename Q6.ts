` Sort an array from lowest to highest`;
import chalk from "chalk";
function sortNumArray(arr: Array<number>):Array<number> {
  let sortArray = arr.sort((a, b) => a - b);
  return sortArray
}

let numbers:Array<number>=[2,8,4,1,3,9,5,10,6,7]
console.log(chalk.blueBright(sortNumArray(numbers)))
