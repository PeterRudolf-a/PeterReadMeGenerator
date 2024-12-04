// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'GNU', 'Apache', 'ISC', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fs = require('fs');
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            const generateMarkdown = `# ${data.title}
            ${renderLicenseBadge(data.license)}
            ## Description
            ${data.description}
            ## Table of Contents
            - [Installation](#installation)
            - [Usage](#usage)
            - [License](#license)
            - [Contributing](#contributing)
            - [Tests](#tests)
            - [Questions](#questions)
            ## Installation
            ${data.installation}
            ## Usage
            ${data.usage}
            ${renderLicenseSection(data.license)}
            ## Contributing
            ${data.contributing}
            ## Tests
            ${data.tests}
            ## Questions
            If you have any questions, you can contact me at ${data.email}. You can also view more of my work at [${data.github}](
            `;
            writeToFile('README.md', generateMarkdown);
});}

// Function call to initialize app
init();
