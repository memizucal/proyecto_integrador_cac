const { getAllItems, getOneItem } = require('../services/itemsServices.js');

const getItems = async (req, res) => {
	const items = await getAllItems();
	res.send(items);
}

const getItem = async (req, res) => {
	const item = await getOneItem(req.params.param);
	res.send(item);
}

const createItem = async (req, res) => {	
}

const updateItem = (req, res) => {
	//Logica para editar un producto
}

const deleteItem = (req, res) => {
	//Logica para borrar un item
}

module.exports = {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem
}

