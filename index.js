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
        textoLicencia = `
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
        Apache License
    Version 2.0, January 2004
    http://www.apache.org/licenses/`;
    }if (data.license =="GNU"){
        textoLicencia = `
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
    GNU GENERAL PUBLIC LICENSE
      Version 3, 29 June 2007
        `;
    } if (data.license == "MIT") {
        textoLicencia = `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
            MIT License
    Copyright (c) Year Full name
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
        `;
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
https://github.com/${data.gitHubAcc}

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
