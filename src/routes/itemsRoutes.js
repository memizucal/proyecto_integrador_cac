const express = require('express');
const router = express.Router();

router.get('/items', (req, res) =>{
	console.log("Ruta para itesm");
})

module.exports = router;
