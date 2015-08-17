var Task = require('./task');

var Todo = React.createClass({
	render: function() {
		return (
			<ul>
				<Task name='Introducción' />
				<Task name='Paso 1' />
				<Task name='Paso 2' />
				<Task name='Paso 3' />
			</ul>
		);
	  }
});

module.exports = Todo;