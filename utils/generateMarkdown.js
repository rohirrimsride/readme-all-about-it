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
  return `
        
  # ${readmeData.title}

  ## Description
  ${readmeData.description}

  ## Table of Contents
  - [Installation](installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${readmeData.installation}

  ## Usage
  ${readmeData.usage}

  ## Contribute
  ${readmeData.contribute}

  ## License
  ${readmeData.license}

  ## Tests
  ${readmeData.tests}

  ## Questions
  ${readmeData.questionsGitHubNameInput}
  ${readmeData.questionsEmailInput}
  `
}

module.exports = generateMarkdown;
