const path = require('path');
const fs = require('fs');

/**
 * Fetches the input file extension
 * @param {object} file - The input file received as form-data
 * @returns {string} The extension of the input file
 */
function getFileExtension(file) {
  if(!file.originalname) return null;
  return path.parse(file.originalname).ext;
}

/**
 * Parses the input specification
 * @param {object} file - The input file received as form-data
 * @returns {object|string} The JSON for the input specification / the path to the input specification file
 */
function parseInputFile(file) {
  const fileExt = getFileExtension(file);
  let origFile = Buffer.from(file.buffer).toString();
  if(fileExt === '.json') {
    origFile = JSON.parse(origFile);
    return origFile;
  }
  else if(fileExt === '.yaml') {
    const filePath = './input.yaml';
    fs.writeFileSync(filePath, origFile);
    return filePath;
  }
  else {
    return fileExt ? 'invalid' : null;
  }
}

/**
 * Sends response based on the requirement
 * @param {object} result - The output file received from lucy's converter
 * @param {object} file - The input file received as form-data
 * @param {string} syntax - The expected syntax of the target specification
 * @param {boolean} toFile - Whether the response should have the specification file as an attachment
 * @param {object} response - The response parameter received by the callback of the express endpoint
 * @returns {object} - The response object that is sent to the client
*/
function sendResponse(result, file, targetSyntax, toFile, response) {
  const options = {syntax: 'yaml', order: 'openapi'},
    fileExt = getFileExtension(file),
    isYamlSyntax = targetSyntax === 'yaml';
  result = isYamlSyntax ? result.stringify(options) : result;
  if(toFile) {
    const fileName = `${path.parse(file.originalname).name}.${targetSyntax ? targetSyntax : 'json'}`,
      fileData = Buffer.from(isYamlSyntax ? result : JSON.stringify(result.spec));
    response.writeHead(200, {
      'Content-Disposition': `attachment; filename="${fileName}"`,
      'Content-Type': isYamlSyntax ? 'text/yaml; charset=UTF-8' : 'application/json; charset=UTF-8'
    });
    response.end(fileData, () => {
      if(fileExt === '.yaml') {
        fs.unlinkSync('./input.yaml');
      }
    });
  }
  else {
    return response.status(200).send(targetSyntax === 'yaml' ? result : JSON.stringify(result.spec));
  }
}

module.exports = {
  parseInputFile,
  sendResponse
};