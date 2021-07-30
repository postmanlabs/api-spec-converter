const path = require('path');
const YAML = require('yamljs');

function getFileExtension(inputFile) {
  if(!inputFile.originalname) return null;
  return path.parse(inputFile.originalname).ext;
}

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

function sendResponse(result, inputFile, targetSyntax, toFile, response) {
  const options = {syntax: 'yaml', order: 'openapi'},
    isYamlSyntax = targetSyntax === 'yaml';
  result = isYamlSyntax ? result.stringify(options) : result;
  if(!toFile) {
    return response.status(200).send(targetSyntax === 'yaml' ? result : JSON.stringify(result.spec));
  }
  const fileName = `${path.parse(inputFile.originalname).name}.${targetSyntax ? targetSyntax : 'json'}`,
    fileData = Buffer.from(isYamlSyntax ? result : JSON.stringify(result.spec));
  response.writeHead(200, {
    'Content-Disposition': `attachment; filename="${fileName}"`,
    'Content-Type': isYamlSyntax ? 'text/yaml; charset=UTF-8' : 'application/json; charset=UTF-8'
  });
  return response.end(fileData);
}

module.exports = {
  parseInputFile,
  sendResponse
};