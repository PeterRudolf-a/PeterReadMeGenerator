// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?' // Prompt for the title of the project
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:' // Prompt for the description of the project
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:' // Prompt for the installation instructions
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information:' // Prompt for usage information
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines:' // Prompt for contribution guidelines
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions:' // Prompt for test instructions
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:', // Prompt for the license
        choices: ['MIT', 'GNU', 'Apache', 'ISC', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?' // Prompt for the GitHub username
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?' // Prompt for the email address
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => // Write the README file
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) // Prompt the user for input
        .then((input) => {
            writeToFile('README.md', generateMarkdown(input)); // call the writeToFile function and pass the input to the generateMarkdown function
});}

// Function call to initialize app
init();
