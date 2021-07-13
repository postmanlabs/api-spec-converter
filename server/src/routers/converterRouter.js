const express = require('express');
const multer = require('multer');
const upload = multer();
const router = new express.Router();

const { mapping } = require('../constants/config');
const { parseInputFile, sendResponse } = require('../util');

router.use(express.json());

var Converter = require('api-spec-converter');

//Endpoint for conversion
router.post('/api/specification/:format/:convertTo', upload.single('file'), async (req, res) => {
    const {format, convertTo} = req.params,
        {syntax = 'json', toFile = false} = req.query;

    // Check if the conversion is possible
    if(mapping[format] && mapping[format].includes(convertTo)) {
      const file = req.file;

      if(!file) {
        res.status(400).send({'message': 'File not available.'});
      }

      //Parse JSON / YAML Input String
      parsedSpec = parseInputFile(file);
      if(!parsedSpec) {
        res.status(400).send({'message': 'File extension not supported.'});
      }

      //Conversion using Lucy's Converter
      Converter.convert({
          from: format,
          to: convertTo,
          source: parsedSpec,
      }, (err, result) => {
        if(err) {
          response.status(500).send({'message': err});
        }
        else {
          sendResponse(result, file, syntax, toFile, res);
        }
      });
    }
    else {
        res.status(404).send({'message': 'Conversion mapping not found.'});
    }

}); 


module.exports = router;