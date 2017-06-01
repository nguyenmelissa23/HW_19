var React = require("react");

var Query = (props) => <div className="queryContainer">
	<h2>Search</h2>
	<div className="topic">
		<h3>Topic</h3>
		<input type="text" />
	</div>
	<div className="startYear">
		<h3>Start Year</h3>
		<input type="text" />
	</div>
	<div className="endYear">
		<h3>End Year</h3>
		<input type="text" />
	</div>
</div>;

module.exports = Query;