var React = require("react");

console.log("Saved.js");

class Saved extends React.Component{
	constructor(props) {
		super();
		this.state = {
			savedArticles: props.savedArticles
		}
	}

	handleDelete(event){
		event.preventDefault();
		console.log("handleDelete");
		this.props.handleDelete({_id: (event.target).getAttribute('data-articleID')});
	}

	componentWillReceiveProps(newprops){
		if (newprops !== this.state.savedArticles){
			this.setState({
				savedArticles: newprops
			});
		}
		
	}

	render(){
		var self = this;
		if (this.props.savedArticles !== []) {
			var currentArray = this.props.savedArticles;
			var articleDivs = currentArray.map(function (article) {
				var articleString = JSON.stringify(article);
				return (
					<div key={article._id}>
						<h3><a href="{article.link}">{article.title}</a></h3>
						<p>Snippet: {article.snippet}</p>
						<p>Published Date: {article.date}</p>
						<form >
							<input onClick={self.handleDelete.bind(self)} data-articleID={article._id} type="submit" value="Delete Article" />
						</form>
					</div>
				)
			});
			return (
				<div className="container resultContainer">
					<h2>Saved Articles</h2>
					<div className="articles">
						{articleDivs}
					</div>
				</div>
			);
		} else {
			return (
				<div className="container resultContainer">
					<h2>Saved Articles</h2>
					<div className="articles">
						Loading...
					</div>
				</div>
			)
		}
	}
};

module.exports = Saved;


