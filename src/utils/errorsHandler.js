const path = require('path');

module.exports = {
	notFound : (req, res, next) =>{		
		res.status(404).sendFile(path.resolve(__dirname, '../../public/views/404.html'));
	}
}
