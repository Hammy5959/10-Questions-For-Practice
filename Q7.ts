`Create a function that filters out negative numbers`
import chalk from "chalk"

function filtterOutNegativeNumbers(arr:Array<number>):Array<number>{
    let removeNegativenumbers = arr.filter((a)=> a >=0)
    return removeNegativenumbers
}

let numbers:Array<number>=[2,-3,5,-56,-87,8,90,-100,45,-2]
console.log(chalk.green(`Positive Numbers: ${filtterOutNegativeNumbers(numbers)}`))