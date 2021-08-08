const express = require('express');
const multer = require('multer');
const router = new express.Router();

const { mapping } = require('../constants/config');
const { parseInput, sendResponse } = require('../util');

router.use(express.json());

var Converter = require('api-spec-converter');
var upload = multer().single('file');

router.post('/api/specification/:format/:convertTo', (req, res) => {
  const {format, convertTo} = req.params,
      {targetSyntax = 'json', toFile = false} = req.query;

  upload(req, res, function() {
    if (req.fileValidationError) {
      return res.status(500).send({'message': req.fileValidationError});
    }
    else if (!req.file && ((typeof req.body === 'string' && req.body === '') || (typeof req.body === 'object' && Object.keys(req.body).length === 0))) {
      return res.status(400).send({'message': 'Input specification not available.'});
    }

    if(mapping[format] && mapping[format].includes(convertTo)) {
      const file = req.file,
        input = file ? file : req.body,
        parsedSpec = parseInput(input);
      if(!parsedSpec) {
        return res.status(400).send({'message': 'File extension not available.'});
      }
      else if(parsedSpec === 'unsupported') {
        return res.status(400).send({'message': 'File extension not supported.'});
      }
      else if(parsedSpec === 'invalid') {
        return res.status(400).send({'message': 'Invalid input specification syntax.'});
      }

      Converter.convert({
          from: format,
          to: convertTo,
          source: parsedSpec,
      }, (err, result) => {
        if(err) {
          return res.status(500).send({'message': err});
        }
        else {
          return sendResponse(result, file, targetSyntax, toFile, res, format, convertTo);
        }
      });
    }
    else {
      return res.status(404).send({'message': 'Conversion mapping not found.'});
    }
  });
}); 


module.exports = router;