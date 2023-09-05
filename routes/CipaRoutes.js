const express = require('express');

const router = express.Router();

const {registercipa, findcipa} = require('../controllers/CipaController');

router.post('/createone', registercipa);
router.post('/findone', findcipa);



module.exports = router;