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

function parseInput (inputFile) {
  let syntax,
    parsedFile;
  const validExtensions = ['json', 'yaml'];

  if(typeof inputFile === 'object') {
    syntax = getFileExtension(inputFile).substring(1);
    if(syntax) {
      if (!validExtensions.includes(syntax)) return 'unsupported';
    }
    else return null;
    inputFile = Buffer.from(inputFile.buffer).toString();
  }
  else {
    syntax = isJson(inputFile) ? 'json' : 'yaml';
  }

  try {
    parsedFile = JSON.parse(inputFile);
  }
  catch(e) {
    try {
      parsedFile = YAML.parse(inputFile);
    }
    catch(e) {
      return 'invalid';
    }
  }
  return parsedFile;
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
  parseInput,
  sendResponse
};