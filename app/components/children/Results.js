var React = require("react");

class Results extends React.Component{
	constructor(){
		super();
		this.state={
			results:[]
		}
	}

	handleSaving(event){
		event.preventDefault();
		console.log("THIS ARTICLE, Saving:", (event.target).getAttribute("data-article"));
		var newSave = JSON.parse((event.target).getAttribute("data-article"));
		console.log("Saving OBJECT:", newSave);

		// console.log("SAVING:");
		this.props.savingArticle(newSave);
		// this.setState({
		// 	results: 0
		// });
	}

	render(){
		var self = this;
		if (this.props.resultsArray !== []){
			var currentArray = this.props.resultsArray;
			var articleDivs = currentArray.map(function(article, index){
				var articleString = JSON.stringify(article);
				return (
					<div key={index}>
						<h3><a href="{article.link}">{article.title}</a></h3>
						<p>Snippet: {article.snippet}</p>
						<p>Published Date: {article.date}</p>
						<form >
							<input onClick={self.handleSaving.bind(self)} data-article={articleString} type="submit" value="Save Article" />
						</form>
					</div>
				)
			});
			return (
				<div className="container resultContainer">
					<h2>Results</h2>
					<div className="articles">
						{articleDivs}
					</div>
				</div>
			);
		} else {
			return (
				<div className="container resultContainer">
					<h2>Results</h2>
					<div className="articles">
						Loading...
					</div>
				</div>
			)
		}
	}
} 

module.exports = Results
