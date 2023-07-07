const express = require('express');
const router = express.Router();
const itemControllers= require('../controllers/itemsControlller.js')

router.get('/items', itemControllers.geItems);
router.get('items/:item', itemControllers.getItem);
router.post('/items/createItem', itemControllers.createItem);
router.put('/items/:item', itemControllers.updateItem);
router.delete('items/:item', itemControllers.deleteItem)

module.exports = router;
