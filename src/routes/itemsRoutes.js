const express = require('express');
const router = express.Router();
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/itemsController.js');

router.get('/items', getItems);
router.get('/items/:param', getItem);
router.post('/items/createItem', createItem);
router.put('/items/:item', updateItem);
router.delete('/items/:item', deleteItem)

module.exports = router;
