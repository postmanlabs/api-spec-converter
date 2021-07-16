const path = require('path');
const fs = require('fs');

/**
 * Parses the input specification
 * @param {object} file - The input file received as form-data
 * @returns {object} The JSON for the input specification / the path to the input specification file
 */
function parseInputFile(file) {
  const fileExt = path.parse(file.originalname).ext;
  var origFile = Buffer.from(file.buffer).toString();

  if(fileExt === '.json') {
    origFile = JSON.parse(origFile);
    return origFile;
  }
  else if(['.yaml', '.apib'].includes(fileExt)) {
    const filePath = `./input${fileExt}`;
    fs.writeFileSync(filePath, origFile);
    return filePath;
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
function sendResponse(result, file, targetSyntax, toFile, response) {
  const options = {syntax: 'yaml', order: 'openapi'},
    fileExt = path.parse(file.originalname).ext,
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
      if(['.yaml', '.apib'].includes(fileExt)) {
        fs.unlinkSync(`./input${fileExt}`);
      }
    });
  }
  else {
    response.status(200).send(targetSyntax === 'yaml' ? result : JSON.stringify(result.spec));
  }
}

module.exports = {
  parseInputFile,
  sendResponse
};