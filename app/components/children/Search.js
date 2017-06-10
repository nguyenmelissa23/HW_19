var React = require("react");

var Results = require("./Results");


class Search extends React.Component{
	constructor(){
		super();
		this.state = {
			keyWord: "", 
			startYear: "", 
			endYear:""
		}
	}

	handleInput(event){
		this.setState({
			[event.target.name]: event.target.value
		});	
	}

	handleSumbit(event){
		event.preventDefault();
		this.props.handleQuery(this.state.keyWord, this.state.startYear, this.state.endYear);
	}

	render() {
		return (
			<div className="container searchContainer">
				<div className="queryContainer">
					<h2>Search</h2>
					<form onSubmit={this.handleSumbit.bind(this)} >
						<h3>Topic</h3>
						<input type="text" 
							value={this.state.keyWord}
							onInput={this.handleInput.bind(this)}
							name="keyWord"
						/>
						<h3>Start Year</h3>
						<input type="text" 
							value={this.state.startYear}
							onInput={this.handleInput.bind(this)}
							name="startYear"
						/>
				
						<h3>End Year</h3>
						<input type="text" 
							value={this.state.endYear} 
							onInput={this.handleInput.bind(this)}
							name="endYear"
						/>
						<br/>
						<input type="submit" value="Submit"/>
					</form>
				</div>
			</div>	
		);
	}
}; 

module.exports = Search;