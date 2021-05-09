// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'what is your github username?',

    },
    {
        type: "input",
        name: "ProjectTitle",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process if any: ",
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project usage for?"
    },
    {
        type: 'list',
        name: 'license',
        message: 'what license should your project have?',
        choices: [
            'MIT',
            'APACHE 2.0',
            'GPL 3.0',
            'BSD 3',
            'none',
        ]
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    console.log(data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (responses) {
        console.log('generating Readme...')
    writeToFile('README.md', generateMarkdown({ ...responses }))
    })
}

// Function call to initialize app
init();
