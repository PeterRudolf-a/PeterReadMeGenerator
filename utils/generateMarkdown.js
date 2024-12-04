// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === 'GNU') {
    return `![License: GNU](https://img.shields.io/badge/License-GNU-blue.svg)`;
  } else if (license === 'Apache') {
    return `![License: Apache](https://img.shields.io/badge/License-Apache-red.svg)`;
  } else if (license === 'ISC') {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-green.svg)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[MIT](https://opensource.org/licenses/MIT)`;
  } else if (license === 'GNU') {
    return `[GNU](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'Apache') {
    return `[Apache](https://www.apache.org/licenses/LICENSE-2.0)`;
  } else if (license === 'ISC') {
    return `[ISC](https://opensource.org/licenses/ISC)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License
    This project is licensed under the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(input) {
  return `# ${input.title}
  ${renderLicenseBadge(input.license)}
  ## Description
  ${input.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${input.installation}
  ## Usage
  ${input.usage}
  ${renderLicenseSection(input.license)}
  ${renderLicenseLink(input.license)}
  ## Contributing
  ${input.contribution}
  ## Tests
  ${input.tests}
  ## Questions
  Link to my GitHub profile: https://github.com/${input.github}.
  If you have any questions, you can contact me at ${input.email}.
`;
}

export default generateMarkdown; // Export the function to be used in index.js
