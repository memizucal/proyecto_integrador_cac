const getConnection = require('../data/dbConnection.js');
const queries = require('../data/queries.js');
const sql = require('mssql')

//Aca van todas las funciones de query que consulta a la base de datos

const getAll = async () => {
	try {
		const pool = await getConnection();
		const result = await pool.request().query(queries.getAllItems);
		return result;
	} catch (error) {
		throw error;
	}
}

const getOne = async (param) => {
	try {		
		const pool = await getConnection();
		const result = await pool.request()
		.input("item_Id", param)
		.query(queries.getOneItem);
		return result;
	} catch (err) {
		const error = {
			isError: true,
			message: `No pudimos recuperar los datos por ${err}`
		}
		return error;
	}
}

const createOne = async (itemSchema) => {
	try {
		const pool = await getConnection();
		const result = await pool.request()		
		.input("category_id", sql.Int, itemSchema.category_id)
		.input("licence_id", sql.Int, itemSchema.licence_id)
		.input("name", sql.NVarChar, itemSchema.name)
		.input("description", sql.NVarChar, itemSchema.description)
		.input("sku", sql.NVarChar, itemSchema.sku)
		.input("price", sql.Int, itemSchema.price)
		.input("stock", sql.Int, itemSchema.stock)
		.input("discount", sql.Int, itemSchema.discount)
		.input("dues", sql.Int, itemSchema.dues)
		.input("image", sql.NVarChar, itemSchema.image)
		.input("active", sql.Bit, itemSchema.active)
		.query(queries.createOneItem);
		return result;
		
	} catch (err) {
		const error = {
			isError: true,
			message: `No pudimos guardar los datos por ${err}`
		}
		return error;		
	}
}

const deleteOne = async (item_id) => {
	try {		
		const pool = await getConnection();
		const result = await pool.request()			
		.input("item_id", sql.Int, item_id)
		.query(queries.deleteOneItem);
		console.log("llegaste aca?")
		return result;	
		
	} catch (err) {
		const error = {
			isError: true,
			message: `No pudimos eliminar los datos por ${err}`
		}
		return error;	
	}
}

module.exports = { 
	getAll,
	getOne,
	createOne,
	deleteOne
}
