// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const badge = renderLicenseBadge(data.license);
function renderLicenseBadge(license) {
  switch(license) {
    case "Apache License 2.0":
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
    case "GNU General Public License v3.0":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    case "MIT License":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "BSD 2-Clause Simplified License":
      return "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "Apache License 2.0":
      return `(https://opensource.org/licenses/Apache-2.0)`;
    case "GNU General Public License v3.0":
      return `(https://www.gnu.org/licenses/gpl-3.0)`;
    case "MIT License":
      return `(https://opensource.org/licenses/MIT)`;
    case "BSD 2-Clause Simplified License":
      return `(https://opensource.org/licenses/BSD-2-Clause)`;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
      return `This project is licensed under the ${license} license.`;
  } else {
      return `No license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);
  const badgeLink = badge ? `[${badge}](${link})` : "";


  return `
  # ${data.reposName}
  ${badgeLink}
  ## Description
  ${data.description}
  ## Table of contents
[installation](#installation)  
[usage](#usage)  
[contribution](#contribution)  
[test](#test)  
[github](#github)  
[email](#email)  
[license](#license)  
## installation  
 ${data.installation}
## usage
  ${data.usage}
## contribution
  ${data.contribution}
## test
  ${data.test}
  ## github
  ${data.github}
  ## email
  ${data.email}
  ## license
  ${renderLicenseSection(data.license)}

`;
}

export default generateMarkdown;
