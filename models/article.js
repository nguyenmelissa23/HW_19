var mongoose = require("mongoose");
var Scheme = mongoose.Schema;

var ArticleSchema = new Scheme({
	title: {
		type: String, 
		unique: true, 
		require: [true, "No title found"], 
		minlength: 1
	}, 

	snippet:{
		type: String, 
		unique: true, 
		required: [true, "No snippet found"], 
		minlength: 1
	},

	link: {
		type: String,
		unique: true,
		require: [true, "No link found"],
		minlength: 1
	},

	date:{
		type: Date, 
		required:[true,"No date found"], 
		minlength: 1
	}
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;