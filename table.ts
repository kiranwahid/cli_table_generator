#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.hex('#8888ff')`\n \t <<<====================================================>>>`);
    
  console.log(chalk.magenta('\n \t ************* CLI TABLE GENERATORS! ***************'));

  console.log(chalk.hex('#8888ff')`\n \t <<<====================================================>>>`);

let tableCondition= true;

while (tableCondition) {
  let user_input = await inquirer.prompt({
    name: "user_num",
    type: "number",
    message: chalk.green("\nWhich table would you like to print?"),
  });

  let user_table = user_input.user_num;
  //console.log(user_input.user_num);

  if (user_table) {
    console.log(chalk.blue(`\nHere is the table of ${user_table}`));
    for (let i = 1; i <= 10; i++) {
      console.log(chalk.yellow(`${user_table} x ${i} = ${user_table * i}`));
    }
  }else{
    console.log(chalk.red("\nEnter a input in numerical form"));
    
  }

  // asking user if he wants to print table again..
  let againPrint = await inquirer.prompt({
    name: 'onceAgain',
    type:"confirm",
    message:chalk.hex('#9999ff')('\nWould you like to print another table?'),
    default: false
  });
  if (againPrint.onceAgain == false) {
    tableCondition = false;

    
  console.log(chalk.hex('#8888ff')`\n \t <<<========================================================>>>`);
    
    console.log(chalk.magenta('\n \t ******** Thank You For Using My Cli Table Gererator! ********'));
    
    
  console.log(chalk.hex('#8888ff')`\n \t <<<========================================================>>>`);
  }

}
