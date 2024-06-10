// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return `![Static Badge](https://img.shields.io/badge/License-Apache%20License%202.0-brightgreen)`
  }
  if (license === "GNU General Public License v3.0") {
    return `![Static Badge](https://img.shields.io/badge/License-GNU%20General%20Public%20License%20v3.0-brightgreen)`
  }
  if (license === "MIT License"){
    return `![Static Badge](https://img.shields.io/badge/License-MIT%20License-brightgreen)`
  }
  if (license === "None"){
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache License 2.0") {
    return `[http://www.apache.org/licenses/](http://www.apache.org/licenses/)`
  }
  if (license === "GNU General Public License v3.0") {
    return `[https://www.gnu.org/licenses/](https://www.gnu.org/licenses/)`
  }
  if (license === "MIT License"){
    return `[https://opensource.org/license/mit](https://opensource.org/license/mit)`
  }
  if (license === "None"){
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "Apache License 2.0") {
    return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  if (license === "GNU General Public License v3.0") {
    return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
  }
  if (license === "MIT License"){
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  if (license === "None"){
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Test

  ${data.test}

  ## License

  ${renderLicenseSection(data.license)}

  ${renderLicenseLink(data.license)}

  ## Github Username

  ${data.github_username}

  ## Email Address

  ${data.email_address}
`;
}

module.exports = generateMarkdown;
