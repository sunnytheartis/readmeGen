const inquirer = require("inquirer")
const fs = require("fs")

inquirer.prompt([
    {
        name: "github",
        type: "input",
        message: "What is your github username?",
    },
    {
        name: "email",
        type: "input",
        message: "What is your email address?",
    },
    {
        name: "title",
        type: "input",
        message: "What is your project's name?",
    },
    {
        name: "description",
        type: "input",
        message: "Please write a short description of your project",
    },
    {
        name: "license",
        type: "list",
        message: "What kind of license should your project have?",
        choices:['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        name: "installation",
        type: "input",
        message: "What command should be run to install dependencies?",
    },
    {
        name: "tests",
        type: "input",
        message: "What command should be run to run tests?",
    },
    {
        name: "usage",
        type: "input", 
        message: "What does the user need to know about using the repo?",
    },
    {
        name: "contributing",
        type: "input",
        message: "What does the user need to know about contributing to the repo",
    },
]).then ((response)=>{
    fs.writeFile("README.md", `
    # ${response.title}

## Description 
${response.description}

## Table of Contents (Optional)



* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation
${response.installation}


## License

${response.license}

## Badges

![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)

## Usage

${response.usage}


## Contributing
${response.contributing}

## Tests
${response.tests}





    `, function(err) {
        if (err) {
          return console.log(err);
        }})
})