const express = require('express');
const router = express.Router();

const{
	homeView	
} = require('../controllers/mainController.js');

router.get('/', (req, res) => res.render('home'));

module.exports = router;