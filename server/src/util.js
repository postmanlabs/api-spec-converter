const YAML = require('yamljs')
const fs = require('fs')
const path = require('path')

function parseSpec(origFile, fileExt) {
  if(fileExt === '.json') {
    origFile = JSON.parse(origFile)
    return origFile
  }
  else if(fileExt === '.yaml') {
    origFile = YAML.parse(origFile)
    return origFile
  }
  else {
    return null
  }
}

function sendResponse(err, result, file, syntax, toFile, response) {
  const options = {syntax: 'yaml', order: 'openapi'}

  if(err) {
    response.status(500).send({'message': err})
  }
  else {
    result = syntax === 'yaml' ? result.stringify(options) : result
    if(toFile) {
      const fileName = `${path.parse(file.originalname).name}.${syntax ? syntax : 'json'}` 
      fs.writeFileSync(`./${fileName}`, syntax === 'yaml' ? result : JSON.stringify(result))
      response.status(200).download(`${path.join(__dirname, '../')}${fileName}`)
    }
    else {
      response.status(200).send(syntax === 'yaml' ? result : JSON.stringify(result.spec))
    }
  }
}

module.exports = {
  parseSpec,
  sendResponse
}