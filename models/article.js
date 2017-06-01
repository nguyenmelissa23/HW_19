var mongoose = require("mongoose");
var Scheme = mongoose.Schema;

var ArticleSchema = new Scheme({
	title: {
		type: String, 
		unique: true, 
		require: [true, "No title found"], 
		minlength: 1
	}, 

	link: {
		type: String,
		unique: true,
		require: [true, "No title found"],
		minlength: 1
	},

	date_saved:{
		type: Date, 
		default: Date.now
	}
});


module.exports = Article;