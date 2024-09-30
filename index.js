// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
inquirer 
.prompt([    
    {
        type: 'input',
        message: ('What is your project title?'),
        name: 'reposName',
    },
    {
        type: 'input',
        message: ('write a description on your project?'),
        name: 'description',
    },
    {
        type: 'input',
        message: ('What are the installation instructions?'),
        name: 'installation',
    },
    {
        type: 'input',
        message: ('What are the usage instructions?'),
        name: 'usage',
    },
    {
        type: 'input',
        message: ('What are the contribution guidelines?'),
        name: 'contribution',
    },
    {
        type: 'input',
        message: ('What are the test instructions?'),
        name: 'test',
    },
    {
        type: 'input',
        message: ('What is your GitHub username?'),
        name: 'github',
    },
    {
        type: 'input',
        message: ('What is your email address?'),
        name: 'email',
    },
    {
        type: 'list',
        message: ('Choose a license for the Repo'),
        name: 'license',
        choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause Simplified License",
        "no license",
        ],
    },
    
    
])
.then((answers) => {
  const readmeContent = generateMarkdown(answers);
  fs.writeFile('2nd_README.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created 2nd_README!')
  );
});