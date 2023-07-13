const getConnection = require('../data/dbConnection.js');
const queries = require('../data/queries.js');

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

const create = async () => {
	try {
		
		
	} catch (error) {
		
	}
}

module.exports = { 
	getAll,
	getOne,
	create
}
