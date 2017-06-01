module.exports ={

	entry: "./app/app.js",
	output:{
		filename: "./public/bundle.js"
	}, 

	module:{
		loaders: [
			{
				test: /\.jsx?$/,
				include: /app/,
				loader: "babel-loader", 
				query: {
					presets: ["react","es2016"]
				}
			}
		]
	}, 

	devtool: "eval-source-map"
};