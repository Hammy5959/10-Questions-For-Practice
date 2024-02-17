` Print a table containing multiplication tables`;

import chalk from "chalk";
import inquirer from "inquirer";
const answers = await inquirer.prompt([
  {
    type: "input",
    name: "table",
    message: "Enter Your Table what you want?",
  },
]);
console.log(chalk.bold.underline(`Here is Your Table`))
for (let i = 1; i <= 10; i++) {
  console.log(
    chalk.cyanBright.bold.underline(
      `${answers.table} x ${i} = ${answers.table * i}`
    )
  );
}
