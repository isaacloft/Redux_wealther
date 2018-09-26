import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {};
}

export class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		// console.log(event.target.value);
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Get a five-day forcast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">
						submit
					</button>
				</span>
			</form>
		);
	}
}

export default connect(
	mapStateToProps
	// Implement map dispatch to props
)(SearchBar);
