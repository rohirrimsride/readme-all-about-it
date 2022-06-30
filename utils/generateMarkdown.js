// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
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
      console.log(`${value}`);
      return `${value}`;
    };         
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  console.log(readmeData);
  const { title, description, installation, usage, contribute, license, tests, questionsGitHubName, questionsEmail } = readmeData[0];
  console.log(license);
  
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
  If you have any questions please contact me.\n
  GitHub Username: ${questionsGitHubName}\n
  Email Address: ${questionsEmail}
  `
}

module.exports = generateMarkdown;
