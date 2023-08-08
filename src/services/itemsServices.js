const { getAll, getOne, createOne, deleteOne } = require('../../models/itemsModel.js'); 
// deriva a ver qué modelo necesita segun lo que le queda

const getAllItems = async () => {
	const allItems = getAll();
	return allItems;
}

const getOneItem = async (param) => {
	const oneItem = await getOne(param);	
	return oneItem;
}

const createOneItem = async (item) => {	
	const itemSchema = {
		licence_id: item.licence_id,
		category_id: item.category_id,
		name: item.name,
		description: item.description,
		sku: item.sku,
		price: item.price,
		stock: item.stock,
		discount: item.discount,
		dues: item.dues,
		image: item.img,
		active: item.active		
	  }
 	await createOne(itemSchema);	
}

const deleteOneItem = async (item) => {
	const id = parseInt(item);
	const itemToDelete = await deleteOne(id);
	return itemToDelete;
}

module.exports = { getAllItems, getOneItem, createOneItem, deleteOneItem }