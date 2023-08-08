const express = require('express');
const router = express.Router();

const{
	shopView	
} = require('../controllers/shopController.js');

router.get('/shop', (req, res) => res.render('shop/shop'));

module.exports = router;