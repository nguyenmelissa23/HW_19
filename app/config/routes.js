var React = require("react");

var router = require("react-router");

var Route = router.Route;

var Router = router.Router;

//????
var hashHistory = router.hashHistory;

var IndexRouter = router.IndexRouter;

var Main = require("../components/Main.js");
var Child1 = require("../components/children/Search");
var Child2 = require("../components/children/Results");
var Child3 = require("../components/children/Saved");

module.exports = (
	<Router history={hashHistory}>
		<Route>
			<Route></Route>
			<Route></Route>
			<Route></Route>
		</Route>
	</Router>
)