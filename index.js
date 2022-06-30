// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMdPage = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questionsData = readmeData => {
    console.log(`
    *******************
    Provide README Data
    *******************
    `);

    if (!readmeData) {
        readmeData = [];
    }

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
            message: 'Provide guidelines for developers who would like to contribute to your project. (Required)',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('Please let others know the guidelines for contributing to your project.');
                    return false;
                }
            }
        },
        {
            type: 'rawlist',
            name: 'license',
            message: 'What license would you like to apply to your project? (Required) Check this resource for more information regarding licenses [https://choosealicense.com/licenses/]',
            choices: ['ISC', 'GNUGPLv3', 'Mozilla', 'Apache', 'MIT', 'Boost', 'Unlicense', 'None']
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide any test instructions for testing your application, or N/A if not applicable. (Required)',
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log('Please provide relevant testing instructions, or N/A if not applicable.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questionsGitHubName',
            message: 'Please add your GitHub Username. (Required)',
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
            name: 'questionsGitHubLink',
            message: 'Please add the link to your GitHub profile. (Required)',
            validate: questionsGitHubLinkInput => {
                if (questionsGitHubLinkInput) {
                    return true;
                } else {
                    console.log('Please enter the link to your GitHub profile.')
                }
            }
        },
        {
            type: 'input',
            name: 'questionsEmail',
            message: 'Please add your email address. (Required)',
            validate: questionsEmailInput => {
                if (questionsEmailInput) {
                    return true;
                } else {
                    console.log('Please provide a valid email address.');
                    return false;
                }
            }
        }        
    ])
    .then(readmeAnswers => {
        readmeData.push(readmeAnswers);
        
        return readmeData;
    })
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('test-readme.md', fileName, data, err => {
            if (err) {
                reject (err);
                return;
            }
            resolve({
                ok: true,
                message: 'File updated!'
            });
        });
    });
};

// TODO: Create a function to initialize app
const init = () => {

}

// Function call to initialize app
// init();
questionsData()
    .then(readmeData => {
        
        return generateMdPage(readmeData);
    })
    .then(pageMarkdown => {
        return writeToFile(pageMarkdown);
    })
    .catch(err => {
        console.log(err);
    })