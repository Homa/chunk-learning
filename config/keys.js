if( process.env.NODE_ENV === 'production' ) {
	module.exports = require('peod.js');
} else {
	module.exports = require('dev.js')
}
