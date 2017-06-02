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
			console.log(response);
			if (response && response !== this.state.savedArticles){
				console.log("savedArticles:", response.data);
				this.setState({savedArticles: response.data});
			}
		}.bind(this));
		console.log("Main state:", this.state);
	}

	//if the components change - search keyword is entered:
	componentDidUpdate(){
		console.log("Component did update");
		helpers.runQuery(this.state.keyWord, this.state.startYear, this.state.endYear).then(function(data){
			console.log("DATA:", data);
			if (data !== this.state.results){
				console.log("Results:", data);
				this.setState({results: data});
			}
		}.bind(this));
		console.log("Main state:", this.state);
	}

	handleQuery(keyWord, startYear, endYear){	
		console.log("Set state on submit");
		this.setState({
			keyWord: keyWord, 
			startYear: startYear, 
			endYear: endYear
		});
		this.componentDidUpdate();
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
						allArticle={this.state.results}
					/>
				</div>
				
				<div className="row">
					<Saved 
						savedArticles = {this.state.savedArticles}
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