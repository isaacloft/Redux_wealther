import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/google_map';

function mapStateToProps(state) {
	// console.log(state);
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
		const { lon, lat } = cityData.city.coord;

		// console.log(temps);

		return (
			<tr key={name}>
				<td>
					<GoogleMap lon={lon} lat={lat} />
				</td>

				<td>
					<Chart data={temps} color="red" units="K" />
				</td>
				<td>
					<Chart data={pressure} color="green" units="hPa" />
				</td>
				<td>
					<Chart data={humidity} color="blue" units="%" />
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
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
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
