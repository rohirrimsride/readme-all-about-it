// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  const { }
  console.log(readmeData);
  return `
    ${renderLicenseBadge()}

    # ${readmeData[0].title}

    ## Description
    ${readmeData[0].description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribute](#contribute)
    - [License](#license)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation
    ${readmeData[0].installation}

    ## Usage
    ${readmeData[0].usage}

    ## Contribute
    ${readmeData[0].contribute}

    ## License
    ${readmeData[0].license}

    ## Tests
    ${readmeData[0].tests}

    ## Questions
    If you have any questions please contact me.
    GitHub Username:${readmeData[0].questionsGitHubName}
    Email Address:${readmeData[0].questionsEmail}
  `
}

module.exports = generateMarkdown;
