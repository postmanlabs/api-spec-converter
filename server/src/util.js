const path = require('path');
const YAML = require('yamljs');

function getFileExtension(inputFile) {
  if(!inputFile.originalname) return null;
  return path.parse(inputFile.originalname).ext;
}

function isJson(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}

function parseInputFile(inputFile) {
  let syntax;
  if(typeof inputFile === 'object') {
    syntax = getFileExtension(inputFile).substring(1);
    inputFile = Buffer.from(inputFile.buffer).toString();
  }
  else {
    syntax = isJson(inputFile) ? 'json' : 'yaml';
  }
  
  if(syntax === 'json') {
    inputFile = JSON.parse(inputFile);
    return inputFile;
  }
  else if(syntax === 'yaml') {
    inputFile = YAML.parse(inputFile);
    return inputFile;
  }
  else {
    return syntax ? 'invalid' : null;
  }
}

function sendResponse(result, inputFile, targetSyntax, toFile, response, format, convertTo) {
  const options = {syntax: 'yaml', order: 'openapi'},
    isYamlSyntax = targetSyntax === 'yaml';
  let fileName;
  result = isYamlSyntax ? result.stringify(options) : result;
  if(!toFile) {
    return response.status(200).send(targetSyntax === 'yaml' ? result : JSON.stringify(result.spec));
  }
  else {
    if(inputFile) {
      fileName = `${path.parse(inputFile.originalname).name}.${targetSyntax ? targetSyntax : 'json'}`;
    }
    else {
      fileName = `${format}-to-${convertTo}.${targetSyntax ? targetSyntax : 'json'}`;
    }
    const fileData = Buffer.from(isYamlSyntax ? result : JSON.stringify(result.spec));
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