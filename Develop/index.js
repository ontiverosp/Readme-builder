const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your project's title?",
        name: "title"
    },
    {
        type: "input",
        message: "Give me a brief descriprion of the project",
        name: "description"
    },
    {
        type: "input",
        message: "How do you install your project?",
        name: "install"
    },
    {
        type: "input",
        message: "How does one use this project?",
        name: "usage"
    },
    {
        type: "list",
        message: "What is your license type?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"]
    },
    {
        type: "input",
        message: "How can people contribute to your project?",
        name: "contribute"
    },
    {
        type: "input",
        message: "Enter testing instructions for your project",
        name: "test"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }
];
// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((inquirerResponses)=>{
        writeToFile("README.md", generateMarkdown({...inquirerResponses}))
    })
}

// function call to initialize program
init();
