const fs = require('fs')
const express = require('express')
const multer = require('multer')
const upload = multer()
const router = new express.Router()

const { mapping } = require('../constants/config');

router.use(express.json())

var Converter = require('api-spec-converter')

router.post('/converter/:format/:convertTo', cors(), upload.single('file'), async (req, res) => {
    var file = req.file,
        {format, convertTo} = req.params,
        buffer = Buffer.from(file.buffer),
        origFile = buffer.toString()

    if(mapping[format] && mapping[format].includes(convertTo)) {
        res.status(404).send({'result': 'error', 'message': 'Conversion mapping not found.', 'data': null})
    }

    else {
        res.status(404).send({'result': 'error', 'message': 'Conversion mapping not found.', 'data': null})
    }

}) 
