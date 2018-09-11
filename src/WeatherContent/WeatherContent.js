import React, { Component } from "react";
import "./WeatherContent.css";
class WeatherContent extends Component {
	render() {
		const {
			selectedTown,
			isCelsius,
			isKmPerHour,
			successRequest,
			showForecast
		} = this.props;
		const tempText = isCelsius ? `C` : `F`;
		const tempSpeed = isKmPerHour ? `км/c` : `м/с`;
		let tempData = "";
		let tempSpeedData = "";
		let forecastObj;
		let forecastList;
		if (selectedTown.current) {
			tempData = isCelsius
				? selectedTown.current.temp_c
				: selectedTown.current.temp_f;
		}
		if (selectedTown.current) {
			tempSpeedData = isKmPerHour
				? selectedTown.current.wind_kph
				: selectedTown.current.wind_mph;
		}
		let message = "Выберите город";
		if (!successRequest) {
			message = "Неправильно введен город";
		}
		if (selectedTown.current) {
			forecastObj = selectedTown.forecast.forecastday;
			forecastList = forecastObj.map(item => (
				<div className="forecast-block">
					<span>{item.date}</span>
					<span>
						{isCelsius ? item.day.avgtemp_c : item.day.avgtemp_f}{" "}
						&#176; {tempText}
					</span>
					<span>
						{isKmPerHour
							? item.day.avgvis_km
							: item.day.avgvis_miles}{" "}
						{tempSpeed}
					</span>
					<img src={item.day.condition.icon} />
				</div>
			));
		}

		const forecastStyle = `weather-info__forcast${
			showForecast ? "" : "--toggle"
		}`;

		return (
			<div className="weather-content">
				{Object.keys(selectedTown).length == 0 ? (
					message
				) : (
					<React.Fragment>
						<div className="weather-info">
							<div className="weather-info__temp">
								<span>
									{selectedTown.location.name}
									<br />
								</span>
								<span>
									{selectedTown.location.localtime}
									<br />
								</span>
								<span>
									{tempData} &#176; {tempText}
									<br />
								</span>
								<span>
									{selectedTown.current.condition.text}
								</span>
							</div>
							<div className="weather-info__aux">
								<div>
									<span>ветер</span> 
									<span>{tempSpeedData} {tempSpeed}</span>
									
								</div>
								<span>
									влажность {selectedTown.current.humidity} %
									
								</span>
								<span>
									давление {selectedTown.current.pressure_mb}{" "}
									рт. ст.
								
								</span>
							</div>
						</div>
						<div className={forecastStyle}>
							<h2>Прогноз погоды</h2>

							<div className="forecast__container">
								{forecastList.slice(1)}
							</div>
						</div>
					</React.Fragment>
				)}
			</div>
		);
	}
}

export default WeatherContent;
