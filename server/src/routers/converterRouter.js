const fs = require('fs')
const path = require('path')
const express = require('express')
const multer = require('multer')
const upload = multer()
const YAML = require('yamljs')
const router = new express.Router()

const { mapping } = require('../constants/config')

router.use(express.json())

var Converter = require('api-spec-converter')

//Endpoint for conversion
router.post('/api/specification/:format/:convertTo', upload.single('file'), async (req, res) => {
    const {format, convertTo} = req.params,
        {syntax = 'json', toFile = false} = req.query,
        options = {syntax: 'yaml', order: 'openapi'}

    // Check if the conversion is possible
    if(mapping[format] && mapping[format].includes(convertTo)) {
      const file = req.file

      if(!file) {
        res.status(400).send({'message': 'File not available.'})
      }

      const fileExt = path.parse(file.originalname).ext
      var origFile = Buffer.from(file.buffer).toString()

      //Parse JSON / YAML
      if(fileExt === '.json') {
        origFile = JSON.parse(origFile)
      }
      else if(fileExt === '.yaml') {
        origFile = YAML.parse(origFile)
      }
      else {
        res.status(400).send({'message': 'File extension not supported.'})
      }

      //Conversion using Lucy's Converter
      Converter.convert({
          from: format,
          to: convertTo,
          source: origFile,
      }, (err, result) => {
          if(err) {
              res.status(500).send({'message': err})
          }
          else {
            result = syntax === 'yaml' ? result.stringify(options) : result
            if(toFile) {
              const fileName = `${path.parse(file.originalname).name}.${syntax ? syntax : 'json'}` 
              fs.writeFileSync(`./${fileName}`, syntax === 'yaml' ? result : JSON.stringify(result))
              res.status(200).download(`${path.join(__dirname, '../../')}${fileName}`)
            }
            else {
              res.status(200).send(syntax === 'yaml' ? result : JSON.stringify(result.spec))
            }
          }
      })
    }
    else {
        res.status(404).send({'message': 'Conversion mapping not found.'})
    }

}) 


module.exports = router