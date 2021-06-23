const fs = require('fs')
const express = require('express')
const multer = require('multer')
const upload = multer()
const router = new express.Router()

const { mapping } = require('../constants/config');

router.use(express.json())

var Converter = require('api-spec-converter')

router.post('/api/converter/:format/:intType/:convertTo/:outType', upload.single('file'), async (req, res) => {
    var file = req.file,
        {format, inType, convertTo, outType} = req.params,
        buffer = Buffer.from(file.buffer),
        origFile = buffer.toString(),
        options = {syntax: 'yaml', order: 'openapi'}
    if(mapping[format] && mapping[format].includes(convertTo)) {
        if(inType === 'yaml') {
            origFile = JSON.stringify(YAML.parse(origFile))
        }
        Converter.convert({
            from: format,
            to: convertTo,
            source: JSON.parse(origFile),
        }, (err, result) => {
            if(err) {
                res.status(500).send({'result': 'error', 'message': err, 'data': null})
            }
            res.status(200).send({'result': 'success', 'message': `Conversion from ${format} to ${convertTo} was successful.` , 'data': outType === 'yaml' ? result.stringify(options) : result})
        })
    }

    else {
        res.status(404).send({'result': 'error', 'message': 'Conversion mapping not found.', 'data': null})
    }
    
})

module.exports = router