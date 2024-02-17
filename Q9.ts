`Return a Boolean if a number is divisible by 10`;

import inquirer from "inquirer";

const asnwers = await inquirer.prompt([
  {
    type: "input",
    name: "user",
    message: "Write Your number?",
  },
]);

function divisibleNumbers(): boolean {
  return asnwers.user % 10 === 0;
}

console.log(divisibleNumbers());
