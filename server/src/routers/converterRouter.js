const path = require('path')
const express = require('express')
const multer = require('multer')
const upload = multer()
const YAML = require('yamljs');
const router = new express.Router()

const { mapping } = require('../constants/config')

router.use(express.json())

var Converter = require('api-spec-converter')

router.post('/api/specification/:format/:convertTo', upload.single('file'), async (req, res) => {
    var file = req.file,
        {format, convertTo} = req.params,
        {syntax} = req.query
        buffer = Buffer.from(file.buffer),
        origFile = buffer.toString(),
        options = {syntax: 'yaml', order: 'openapi'}

    if(mapping[format] && mapping[format].includes(convertTo)) {
      if(path.extname(file.originalname) === 'json') {
        origFile = JSON.parse(origFile)
      }
      else {
        origFile = YAML.parse(origFile)
      }
      Converter.convert({
          from: format,
          to: convertTo,
          source: origFile,
      }, (err, result) => {
          if(err) {
              res.status(500).send({'message': err})
          }
          else {
            res.status(200).send({'spec': syntax === 'yaml' ? result.stringify(options) : result})
          }
      })
    }

    else {
        res.status(404).send({'message': 'Conversion mapping not found.'})
    }

}) 


module.exports = router