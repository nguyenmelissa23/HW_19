var React = require("react");

var Search = require("./children/Search");
var Saved = require("./children/Saved");

var helpers = require("./utils/helpers")

class Main extends React.Component {

	getInitialState(){
		//Initial state when page loads:
		return {
			keyWord: "", 
			startYear: "", 
			endYear: "",
			results: [],
			savedArticles:[]
		}
	}

	//When page loads, get the saved article and display:
	componentDidMount(){
		helpers.getSavedArticles().then(function(response){
			console.log(response);
			if (response !== this.state.savedArticles){
				console.log("savedArticles:", response.data);
				this.setState({savedArticles: response.data});
			}
		}).bind(this);
	}

	//if the components change - search keyword is entered:
	componentDidUpdate(){
		helpers.runQuery(this.state.keyWord, this.state.startYear, this.state.endYear).then(function(data){
			if (data!== this.state.results){
				console.log("Results:", data);
				this.setState({results: data});
			}
		}).bind(this);
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
						searchKeys= {this.state.keyWord, this.state.startYear, this.state.endYear} 
						searchResults={this.state.results}
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

module.exports = Main;