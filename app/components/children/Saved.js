var React = require("react");

console.log("Saved.js");

class Saved extends React.Component{
	// getInitialState: function(){

	// }, 

	// stateHandler: function(event){

	// }, 

	render(){
		return (
			<div className="container savedContainer">
				<div className="article">
					
				</div>
			</div>
		);
	}
};

var Result = (props) => <div className="article">
							<h3><a href={props.articleLink}>{props.articleName}</a></h3>
							<button>Save</button>
						</div>



module.exports = Saved;


