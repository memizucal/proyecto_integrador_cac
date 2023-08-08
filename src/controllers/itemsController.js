const { getAllItems, getOneItem, createOneItem, deleteOneItem } = require('../services/itemsServices.js');

const getItems = async (req, res) => {
	const items = await getAllItems();
	res.send(items);
}

const getItem = async (req, res) => {
	const item = await getOneItem(req.params.param);
	res.send(item);
}

const createItem = async (req, res) => {	
	const item = req.body;
	await createOneItem(item);	
}

const updateItem = (req, res) => {
	//Logica para editar un producto
}

const deleteItem = async (req, res) => {
	const item = req.params.item;	
	await deleteOneItem(item);
	res.send(item)
}

module.exports = {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem
}

