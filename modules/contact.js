var React = require('react');

var Contact = React.createClass({
	render: function(){
		console.log(this.props.params)
		return (
			<div>Contact</div>

		)
	}
})

module.exports = Contact;