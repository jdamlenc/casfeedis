/** @jsx React.DOM */
var FeedList = React.createClass({
	render: function() {
	var createItem = function(itemText) {
		return <li>{itemText}</li>;
	};
		return <ul>{this.props.items.map(createItem)}</ul>;
	}
	});
	var FeedApp = React.createClass({
		getInitialState: function() {
			return {items: [], text: ''};
	},
	onChangeText: function(e) {
		this.setState({text: e.target.value});
	},
	onChangeName: function(e) {
		this.setState({name: e.target.value});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var nextItems = this.state.items.concat([this.state.text] + ' / ' + [this.state.name]);
		var nextText = '';
		this.setState({items: nextItems, text: nextText});
	},
	render: function() {
		return (
			<div>
			<h3>News Feed</h3>
			<FeedList items={this.state.items} />
			<form onSubmit={this.handleSubmit}>
			<input onChange={this.onChangeText} value={this.state.text} />
			<input onChange={this.onChangeName} value={this.state.name} />
			<button>{'Add #' + (this.state.items.length + 1)}</button>
			</form>
			</div>
			);
		}
	});
React.renderComponent(<FeedApp />, example);
