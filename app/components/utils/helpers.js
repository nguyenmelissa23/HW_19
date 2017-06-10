// Axios - HTTP requests (promise based)

var axios = require("axios");

var nytAPI = "4326d53291984def8c35d475f1f75613"; 



var helper = {
	//run query to nyt to display the Search
	runQuery: function(keyWord, startYear, endYear){
		console.log("keyWord:", keyWord);
		console.log("startYear:", startYear);
		console.log("endYear:", endYear);
		if (keyWord !== ""){
			if (startYear === "") startYear = "2017";
			if (endYear === "") endYear="2017";
			keyWord = encodeURI(keyWord);
			var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
				+ "?api-key=" + nytAPI
				+ "&page=0&sort=newest"
				+ "&q=" + keyWord 
				+ "&begin_date=" + startYear + "0101"
				+ "&end_date=" + endYear + "1231";
			console.log("queryURL", queryURL);
			return axios.get(queryURL).then(function(response){
				console.log("RESPONSE",response.data);
				if (response.data.response){
					var resultArray =[];
					for (var i = 0; i < 5; i++){
						var currentArticle = response.data.response.docs[i];
						var newArticle = {
							title: currentArticle.headline.main,
							snippet: currentArticle.lead_paragraph,
							link: currentArticle.web_url,
							date: currentArticle.pub_date
						};
						resultArray.push(newArticle);
					}
					console.log(resultArray);
					return resultArray;
				}
				return " ";
			});
		}
	}, 

	//Retrieved the Saved articles
	getSavedArticles: function(){
		return axios.get("/api/saved");
	}, 

	saveArticle: function(articleObj){
		return axios.post("/api/saved", {
			title: articleObj.title,
			snippet: articleObj.snippet,
			link: articleObj.link,
			date: articleObj.date
		});
	}, 

	deleteArticle: function(articleObj){
		console.log("articleObj._id", articleObj._id);
		return axios.delete("/api/saved", {
			_id: articleObj._id
		}); 
	}

};

module.exports = helper;