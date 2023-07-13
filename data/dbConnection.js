const sql = require('mssql');
require('dotenv').config(); 

const dbSettings = {
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	server: process.env.DB_HOST,
	database: process.env.DB_NAME,
	options: {
		encrypt : true,
		trustServerCertificate: true,
	},
}

module.exports = async function getConnection() {
	try {
		const pool = await sql.connect(dbSettings);
		return pool;
	} catch (error) {
		throw error;
	}
};


