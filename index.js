// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
console.log(inquirer);
// TODO: Create an array of questions for user input
const questionsData = () => {
    console.log(`
    *******************
    Provide README Data
    *******************
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please provide a project title.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description for your project, detailing the what, why and how. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide a project description.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide the necessary installation steps. (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true; 
                } else {
                    console.log('Please provide any relevant installation instructions or N/A if not applicable.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for use and some examples. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide brief instructions and examples of how to use this application.');
                    return false;
                }

            }
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Provide guidelines for developers who would like to contribute to your project (Required)',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('Please let others know the guidelines for contributing to your project');
                    return false;
                }
            }
        },
        {
            type: 'rawlist',
            name: 'license',
            message: 'What license would you like to apply to your project? (Required) Check this resource for more information regarding licenses [https://choosealicense.com/licenses/]',
            choices: ['GNU GPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'No License']
        },
        {
            type: 'input',
            name: 'questionsGitHubName',
            message: 'Please add your GitHub Username (Required)',
            validate: questionsGitHubNameInput => {
                if (questionsGitHubNameInput) {
                    return true;
                } else {
                    console.log('Please provide your GitHub User name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questionsEmail',
            message: 'Please add your email address (Required)',
            validate: questionsEmailInput => {
                if (questionsEmailInput) {
                    return true;
                } else {
                    console.log('Please provide a valid email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: ''
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {

}

// Function call to initialize app
// init();
questionsData();