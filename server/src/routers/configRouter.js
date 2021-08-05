const express = require('express');
const router = new express.Router();

const { mapping } = require('../constants/config');

router.use(express.json());

router.get('/api/specification/mapping', (req, res) => {
  return res.status(200).send(mapping);
});


module.exports = router;