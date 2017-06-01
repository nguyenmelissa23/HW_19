var React = require("react");

var Query = require("./grandchildren/Query");
var Results = require("./grandchildren/Results");


class Search extends React.Component{
	// getInitialState: function () {
	// },

	// stateHandler: function () {

	// },

	render() {
		return (
			<div className="searchContainer">
				<p>This is the Search.js</p>
				<Query/> 
				<Results/>
			</div>	
		);
	}
}; 

module.exports = Search;