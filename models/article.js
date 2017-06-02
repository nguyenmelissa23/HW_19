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

	date:{
		type: Date
	}
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;