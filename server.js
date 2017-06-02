var express = require("express");
var bodyParser = require("body-parser");
var mongojs = require("mongojs");
var mongoose = require("mongoose");
var Promise = require("bluebird");
var cors = require("cors");

mongoose.Promise = Promise;

var app = express();
// app.use(cors());
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

var Article = require("./models/article");

app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));



var PORT = process.env.PORT || 3000;

app.set('port', PORT);

mongoose.connect("mongodb://heroku_vjqt6dlh:rsk5i46v75ph0fnfn42jivot0@ds029496.mlab.com:29496/heroku_vjqt6dlh");
var db = mongoose.connection;

db.on('err', function(err){
	console.log("Mongoose Error:", err);
});

db.once("open", function(){
	console.log("Mongoose connected successfully");
});

/**
 * ROUTING
 */

// app.use(function (req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// });

app.get("/", function(req, res){
	res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/saved", function(req,res){
	Article.find({}, function(error,articles){
		if (error) console.log(error);
		res.json(articles);
	});
});

app.post("/api/saved", function(req,res){
	console.log("RES.BODY", req.body);
	var newArticle = new Article(req.body);
	newArticle.save(function(error, saved){
		if (error) console.log(error);
		res.json(saved);
	})
});

app.delete("/api/saved", function(req, res){
	Article.findOneAndRemove({
		title: req.body.title,
		link: req.body.link
	}, function(deleted){
		res.json(deleted);
	})
});


app.listen(PORT, function(){
	console.log("App listening on https://localhost:" + PORT);
});




// * `/api/saved`(get) - your components will use this to query MongoDB for all saved articles

// * `/api/saved`(post) - your components will use this to save an article to the database

// * `/api/saved`(delete) - your components will use this to delete a saved article in the database

// * `*`(get) - will load your single HTML page (with ReactJS) in public / index.html.Make sure you put this after all other GET routes