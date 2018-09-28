import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';

function mapStateToProps(state) {
	return { weather: state.weather };
}

export class WeatherList extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);

		// console.log(temps);

		return (
			<tr key={name}>
				<td>{name}</td>

				<td>
					<Chart data={temps} color="red" />
				</td>
				<td>
					<Chart data={pressure} color="green" />
				</td>
				<td>
					<Chart data={humidity} color="blue" />
				</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>{this.props.weather.map(this.renderWeather)}</tbody>
			</table>
		);
	}
}

export default connect(
	mapStateToProps
	// Implement map dispatch to props
)(WeatherList);
