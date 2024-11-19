// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: "Enter the name of your project",
    },
    {
        type: 'input',
        name: 'description',
        message: "Enter a description of your project",
    },
    {
        type: 'input',
        name: 'installationInstr',
        message: "Enter installation instruction of your project",
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: "Enter usage Information of your project",
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: "Enter contribution guidelines of your project",
    },
    {
        type: 'input',
        name: 'testInstr',
        message: "Enter test Instrucions of your project",
    },
    {
        type: 'list',
        message:(
            'Choose a licencse:'
        ),
        name: 'license',
        choices: ['apache', 'GNU', 'MIT'],
    },
    {
        type: 'input',
        name: 'gitHubAcc',
        message: "Enter your GitHub account",
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: "Enter your email address",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let textoLicencia;
    if (data.license == "apache") {
        textoLicencia = "Licencia apache";
    }if (data.license =="GNU"){
        textoLicencia = "Licencia GNU";
    } if (data.license == "MIT") {
        textoLicencia = "Licencia MIT";
}

    const texto =
        `#${data.projectTitle}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [License](#license)
- [GitHub Account](#github-account)
- [Email Address](email-address)

## Installation
${data.installationInstr}

## Usage
${data.usageInfo}

## Contribution Guidelines
${data.contributionGuidelines}

## Test Instructions
${data.testInstr}

## License
${data.license}

## GitHub Account
${data.gitHubAcc}

## Email Address
${data.emailAddress}

bye`;
    fs.writeFile(fileName, texto, (err) =>
    err ? console.log(err) : console.log('Success!'));
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
        writeToFile('README.md', answers);
        //console.log(answers.projectTitle);
    });
}

// Function call to initialize app
init();
