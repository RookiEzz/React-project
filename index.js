var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var HashHistory = require('react-router').hashHistory;
var IndexRoute = require('react-router').IndexRoute;

var Home = require('./modules/home');
var App = require('./modules/app');
var Contact = require('./modules/contact');
var About = require('./modules/about');
var Detail = require('./modules/detail');
var List = require('./modules/list');

var Index = React.createClass({
	render: function(){
		return (
			<Router history={HashHistory}>
				<Route path="/" component={ App }>
					<IndexRoute component={Home}/>
					<Route path="/about" component={ About } />
					<Route path="/contact/:username/:id" component={ Contact } />
					<Route path="/detail/:category/:id" component={ Detail } />
					<Route path="/list/:category/:page" component={ List } />
				</Route>
			</Router>
		)
	}
})

ReactDOM.render(<Index/>, document.getElementById('app'));