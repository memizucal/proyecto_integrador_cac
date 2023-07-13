const { getAll, getOne } = require('../../models/itemsModel.js');  
// deriva a ver qué modelo necesita segun lo que le queda

const getAllItems = async () => {
	const allItems = getAll();
	return allItems;
}

const getOneItem = async (param) => {
	const oneItem = await getOne(input, param);	
	return oneItem;
}

module.exports = { getAllItems, getOneItem }