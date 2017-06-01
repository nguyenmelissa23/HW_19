// Axios - HTTP requests (promise based)

var axios = require("axios");

var nytAPI = "4326d53291984def8c35d475f1f75613"; 

var helper = {
	//run query to nyt to display the Search
	runQuery: function(keyWord, startYear, endYear){
		console.log("keyWord:", keyWord);
		console.log("startYear:", startYear);
		console.log("endYear:", endYear);

		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
			+ "?api-key=" + nytAPI
			+ "&page=0&sort=newest"
			+ "&q=" + keyWord 
			+ "&begin_date=" + startYear + "0101"
			+ "&end_date=" + endYear + "0101";
		console.log("queryURL", queryURL);
		return axips.get(queryURL).then(function(response){
			if (response.data.results[0]){
				return response.data.results[0].formatted;
			}
			return "";
		});
	}, 

	//Retrieved the Saved articles
	getSavedArticles: function(){
		return axios.get("/api/saved");
	}, 

	saveArticle: function(articleObj){
		return axios.post("/api/saved", articleObj);
	}

};

module.exports = helper;