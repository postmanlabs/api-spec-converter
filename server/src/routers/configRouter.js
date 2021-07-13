const express = require('express');
const router = new express.Router();

const { mapping } = require('../constants/config');

router.use(express.json());

//Endpoint for mapping
router.get('/api/specification/mapping', async (req, res) => {
  return res.status(200).send(mapping);
});


module.exports = router;