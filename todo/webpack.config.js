var pkg = require('./package.json');

module.exports = {
	resolve : {
		extensions : ['','.jsx','.js']
	},
	entry : './react/app.jsx',

	output : {
		path : './build',
		filename : pkg.name + '.js'
	},
	module : {
		loaders : [{ test: /\.jsx$/, loader: 'jsx-loader' }]
	}
};