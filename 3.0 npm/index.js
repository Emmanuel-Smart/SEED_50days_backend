// building a url to grand code to the website application


import inquirer from 'inquirer';

// qrcode = require('qrcode-terminal');
import qrcode from "qrcode-terminal";


// const inquirer=requier("inquirer")
inquirer
  .prompt([
    /* Pass your questions in here */

    {
        message:"Enter your URL please!",
        name: "URL",
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
    qrcode.generate(answers.URL, {small: true}, (qrcode) => {
        console.log(qrcode)
  })
})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  })