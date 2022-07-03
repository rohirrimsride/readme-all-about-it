const { link } = require("fs");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Much gratitude to lukas-h for a markdown list of badges https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  let licenseOpt = ['ISC', 'GNUGPLv3', 'Mozilla', 'Apache', 'MIT', 'Boost', 'Unlicense', 'None']
    for (let i = 0; i < licenseOpt.length; i++) {
      if (license === licenseOpt[i]) {
   
        let licenseBadgeOpt = {
          ISC: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`,
          
          GNU: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`,
        
          Mozilla: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`,

          Apache: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`,

          MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`,

          Boost: `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`,

          Unlicense: `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`,

          None: ''
        }
        
        Object.entries(licenseBadgeOpt);
        for (const [key, value] of Object.entries(licenseBadgeOpt)) {
          if (key === license) {
            return `${value}`;
          };         
        };
      };
    };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLinkOpt = {
    
    ISC: `(https://opensource.org/licenses/ISC)`,
       
    GNU: `(https://www.gnu.org/licenses/gpl-3.0)`,
        
    Mozilla: `(https://opensource.org/licenses/MPL-2.0)`,
        
    Apache: `(https://opensource.org/licenses/Apache-2.0)`,
      
    MIT: `(https://opensource.org/licenses/MIT)`,
      
    Boost: `(https://www.boost.org/LICENSE_1_0.txt)`,
     
    Unlicense: `(http://unlicense.org/)`,
     
    None: ''  
  }
  Object.entries(licenseLinkOpt);
  for (const [key, value] of Object.entries(licenseLinkOpt)) {
    if (key === license) {
      return `${value}`;
    };         
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseName = {
    ISC: '[ISC]',
       
    GNU: '[GNU GPLv3]',
        
    Mozilla: '[Mozilla Public License 2.0]',
        
    Apache: '[Apache License 2.0]',
      
    MIT: '[MIT License]',
      
    Boost: '[Boost Software License 1.0]',
     
    Unlicense: '[The Unlicense]',
     
    None: ''  
  }
  Object.entries(licenseName);
  for (const [key, value] of Object.entries(licenseName)) {
    if (key === license) {
      return `${value}`;
    }
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  const { title, description, installation, usage, contribute, license, tests, questionsGitHubName, questionsGitHubLink, questionsEmail } = readmeData[0];
  
  return `
  ${renderLicenseBadge(license)}${renderLicenseLink(license)}

  # ${title}

  ## Description
  ${description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Contribute
  ${contribute}

  ## License
  ${renderLicenseSection(license)}${renderLicenseLink(license)}

  ## Tests
  ${tests}

  ## Questions
  If you have any questions please contact me using either of these options.\n
  GitHub Username: [${questionsGitHubName}](${questionsGitHubLink})\n
  Email Address: ${questionsEmail}
  `
}

module.exports = generateMarkdown;
