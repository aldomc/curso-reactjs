React = require('react');

module.exports = React.createClass({
	render : function(){
		return (
			<h1> { "Hello " + this.props.name } </h1>
		)
	}
});
