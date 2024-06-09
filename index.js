// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown");
const { type } = require('os');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is the title of your project?",
    },
    {
        type:"input",
        name:"description",
        message:"provide a description of your project",
    },
    {
        type:"input",
        name:"installation",
        message:"what are the installation instructions for this project?",
    },
    {
        type:"input",
        name:"usage",
        message:"what's the usage of this app?",
    },
    {
        type:"input",
        name:"contributing",
        message:"what are the user instructions for contributing?",
    },
    {
        type:"input",
        name:"test",
        message:"what are your testing instructions for this project?"
    },
    {
        type:"list",
        name:"license",
        choices:["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "None"],
        message:"choose your license",
    },
    {
        type:"input",
        name:"github_username",
        message:"Please add your Github username",
    },
    {
        type:"input",
        name:"email_address",
        message:"Please add your email address",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile( fileName, data, (err) =>{
        if (err) {console.log (err);}
        console.log("readme create!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers)
        const readmeTemplate = generateMarkdown(answers)
        writeToFile("GeneratedReadme.md", readmeTemplate) 
    }); 
}

// Function call to initialize app
init();
