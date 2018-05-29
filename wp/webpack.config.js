const path = require('path');
module.exports = {
	entry:{
		app:["./src/index.js"]
	},
	output:{
		path: path.resolve(__dirname,'build'),
		publicPath:"/assets",
		filename:'bundle.js'
	}
}