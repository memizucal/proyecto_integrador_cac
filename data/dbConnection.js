const Connection = require('tedious').Connection;

const config = {
	server: "MEMI-ZUCAL",
	authentication: {
		type: 'default',
		options : {
			userName: "funkoshopadmin",
			password: "funkoshop123"
		}
	},
	options: {		
		port: 1433,
		database: 'funkoshop',
		trustServerCertificate: true
	}
}

const connection = new Connection(config);

connection.connect();

connection.on('connect', (err)=>{
	if(err){
		console.log("Error al conectarse a la base de datos");
		throw err;
	}
	else {executeStatement();}
})

function executeStatement(){
	console.log("Conectado a la base de datos")
}