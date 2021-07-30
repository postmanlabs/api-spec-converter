const path = require('path');
const YAML = require('yamljs');

/**
 * Fetches the input file extension
 * @param {object} inputFile - The input file received as form-data
 * @returns {string} The extension of the input file
 */
function getFileExtension(inputFile) {
  if(!inputFile.originalname) return null;
  return path.parse(inputFile.originalname).ext;
}

/**
 * Parses the input specification
 * @param {object} inputFile - The input file received as form-data
 * @returns {object|string} The JSON for the input specification
 */
function parseInputFile(inputFile) {
  const inputFileExtension = getFileExtension(inputFile);
  let originalSpecification = Buffer.from(inputFile.buffer).toString();
  if(inputFileExtension === '.json') {
    originalSpecification = JSON.parse(originalSpecification);
    return originalSpecification;
  }
  else if(inputFileExtension === '.yaml') {
    originalSpecification = YAML.parse(originalSpecification);
    return originalSpecification;
  }
  else {
    return inputFileExtension ? 'invalid' : null;
  }
}

/**
 * Sends response based on the requirement
 * @param {object} result - The output file received from lucy's converter
 * @param {object} inputFile - The input file received as form-data
 * @param {string} targetSyntax - The expected syntax of the target specification
 * @param {boolean} toFile - Whether the response should have the specification file as an attachment
 * @param {object} response - The response parameter received by the callback of the express endpoint
 * @returns {object} - The response object that is sent to the client
*/
function sendResponse(result, inputFile, targetSyntax, toFile, response) {
  const options = {syntax: 'yaml', order: 'openapi'},
    isYamlSyntax = targetSyntax === 'yaml';
  result = isYamlSyntax ? result.stringify(options) : result;
  if(!toFile) {
    return response.status(200).send(targetSyntax === 'yaml' ? result : JSON.stringify(result.spec));
  }
  else {
    const fileName = `${path.parse(inputFile.originalname).name}.${targetSyntax ? targetSyntax : 'json'}`,
      fileData = Buffer.from(isYamlSyntax ? result : JSON.stringify(result.spec));
    response.writeHead(200, {
      'Content-Disposition': `attachment; filename="${fileName}"`,
      'Content-Type': isYamlSyntax ? 'text/yaml; charset=UTF-8' : 'application/json; charset=UTF-8'
    });
    return response.end(fileData);
  }
}

module.exports = {
  parseInputFile,
  sendResponse
};