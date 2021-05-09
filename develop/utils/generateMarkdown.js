// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'unlicense') return '';

  const badgeName = license.replace('-', ' ');

  return `![${license}](https://img.shields.io/badge/license-${badgeName}-green?style=flat)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'unlicense') return '';

  return `[${license}](https://choosealicense.com/licenses/${license}/)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'unlicense') return '';

  return `Licensed under the ${renderLicenseLink(license)} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data);
  let markdown = '';
  markdown += `# Github\n`
  markdown += `${data.github}\n `
  markdown += `# Project Title \n`
  markdown += `${data.ProjectTitle}\n`
  markdown += `# Description\n`
  markdown += `${data.description}\n`
  markdown += `# Installation\n`
  markdown += `${data.installation}\n`
  markdown += `# Usage\n`
  markdown +=  `${data.usage}\n`
  markdown += `# License\n`
  markdown +=  `${data.license}\n`
  markdown += `# email\n`
  markdown +=  `${data.email}`

  return `${markdown}`;

}

module.exports = generateMarkdown;

// readme file
// # Github;
// swethareddyl;
//  # Project Title;
//  First Project;
//  # Description;
//  Description text goes here;
