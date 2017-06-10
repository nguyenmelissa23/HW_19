var React = require("react");

var Search = require("./children/Search");
var Saved = require("./children/Saved");
var Results = require("./children/Results");

var helpers = require("./utils/helpers")

class Main extends React.Component {

	constructor(){
		super();
		//Initial state when page loads:
		console.log("INIT STATE");
		this.state = {
			keyWord: "", 
			startYear: "", 
			endYear: "",
			results: [],
			savedArticles:[]
		}
	}

	//When page loads, get the saved article and display:
	componentDidMount(){
		console.log("Component Did Mount");
		helpers.getSavedArticles().then(function(response){
			if (response && response !== this.state.savedArticles){
				this.setState({savedArticles: response.data});
			}
		}.bind(this));
		console.log("Main state:", this.state);
	}

	//if the components change - search keyword is entered:
	componentDidUpdate(){
		console.log("Component did update");
		helpers.runQuery(this.state.keyWord, this.state.startYear, this.state.endYear).then(function(data){
			if (data !== this.state.results){
				this.setState({results: data});
			}
		}.bind(this));
		console.log("Main state:", this.state);
		console.log("RESULTS:", this.state.results);
	}

	handleQuery(keyWord, startYear, endYear){	
		this.setState({
			keyWord: keyWord, 
			startYear: startYear, 
			endYear: endYear
		});
	}

	handleSaving(articleObj){
		console.log("handleSaving");
		helpers.saveArticle(articleObj).then(function(saved){
			console.log("SAVED",saved);
			if (saved.data){
				helpers.getSavedArticles().then(function(documents){
					console.log("GETsavedarticle:", documents);
					if (documents !== this.state.savedArticles) {
						console.log("Results:", documents);
						this.setState({ 
							savedArticle: documents 
						});
						console.log("After saving, state:", this.state);
					}
				}.bind(this));
			}
		}.bind(this));
		
	}


	handleDelete(articleObj){
		helpers.deleteArticle(articleObj).then(function(deleted){
			console.log("DELETED:", deleted);
		});
	}

	render(){
		return (
			<div className="container main-container">
				<div className="row">
					<div className="jumbotron">	
						<h1>The NEW YORK Times</h1>
						<p>Get your latest news and save your favorites</p>
					</div>	
				</div>

				<div className="row">
					<Search 
						handleQuery={this.handleQuery.bind(this)}
					/>
					<Results
						resultsArray={this.state.results}
						savingArticle={this.handleSaving.bind(this)}
					/>
				</div>
				
				<div className="row">
					<Saved 
						savedArticles = {this.state.savedArticles}
						handleDelete = {this.handleDelete}
					/>
				</div>

			</div>
		);
	}
};

// var styles = StyleSheet.create({
// 	container: { 
// 		maxWidth: 800,
// 	}
// })

module.exports = Main;