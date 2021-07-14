const YAML = require('yamljs');
const path = require('path');

/**
 * Parses the input specification
 * @param {object} file - The input file received as form-data
 * @returns {object} The JSON for the input specification
 */
function parseInputFile(file) {
  const fileExt = path.parse(file.originalname).ext;
  var origFile = Buffer.from(file.buffer).toString();

  if(fileExt === '.json') {
    origFile = JSON.parse(origFile);
    return origFile;
  }
  else if(fileExt === '.yaml') {
    origFile = YAML.parse(origFile);
    return origFile;
  }
  else {
    return null;
  }
}

/**
 * Sends response based on the requirement
 * @param {object} result - The output file received from lucy's converter
 * @param {object} file - The input file received as form-data
 * @param {string} syntax - The expected syntax of the target specification
 * @param {boolean} toFile - Whether the response should have the specification file as an attachment
 * @param {object} response - The response parameter received by the callback of the express endpoint
 */
function sendResponse(result, file, syntax, toFile, response) {
  const options = {syntax: 'yaml', order: 'openapi'};
  result = syntax === 'yaml' ? result.stringify(options) : result;
  if(toFile) {
    const fileName = `${path.parse(file.originalname).name}.${syntax ? syntax : 'json'}`; 
    const fileData = Buffer.from(syntax === 'yaml' ? result : JSON.stringify(result.spec))
    response.writeHead(200, {
      'Content-Disposition': `attachment; filename="${fileName}"`,
      'Content-Type': syntax === 'yaml' ? 'text/yaml' : 'application/json'
    })
    response.end(fileData)
  }
  else {
    response.status(200).send(syntax === 'yaml' ? result : JSON.stringify(result.spec));
  }
}

module.exports = {
  parseInputFile,
  sendResponse
};