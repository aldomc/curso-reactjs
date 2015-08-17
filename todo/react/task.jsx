var Task = React.createClass({
	render: function() {
		return (
			<li>
		 		<label>
		 			<input type="checkbox"/>
		 			{this.props.name}
		 		</label>
		 	</li>
		);
	}
});

module.exports = Task;