import moment from "moment";
import React, { Component } from "react";
import Map from "./Map/Map.js"
import "./WeatherContent.css";

class WeatherContent extends Component {
	render() {
		const {
			selectedTown,
			isCelsius,
			isKmPerHour,
			successRequest,
			showForecast,
			showMap,
		} = this.props;
		const tempText = isCelsius ? `C` : `F`;
		const tempSpeed = isKmPerHour ? `км/h` : `м/h`;
		let tempData = "";
		let tempSpeedData = "";
		let tempDataFeelsLike = "";
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
		if (selectedTown.current) {
			tempDataFeelsLike = isCelsius
				? selectedTown.current.feelslike_c
				: selectedTown.current.feelslike_f;
		}
		let message = "Выберите город";
		if (!successRequest) {
			message = "Неправильно введен город";
		}
		if (selectedTown.current) {
			forecastObj = selectedTown.forecast.forecastday;
			forecastList = forecastObj.map((item,index) => (
				<div className="forecast-block" key={index}>
				 <span>{moment(item.date).format('LLLL')}</span> 
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
							<div className="weather-info__main">
								<span className="weather-info__name">
									{selectedTown.location.name}
									<br />
								</span>
								<span className="weather-info__time">
									{moment(selectedTown.location.localtime).format('LLLL')}
									<br />
								</span>
								<span className="weather-info__degree">
									{tempData}&#176;{tempText}
									<br />
								</span>
								<span className="weather-info__feelslike">
									Feels like {tempDataFeelsLike}&#176;{tempText}
									<br />
								</span>
								<span className="weather-info__descr">
									{selectedTown.current.condition.text}
								</span>
							</div>
							<div className="weather-info__aux">
								<div>
									<span>ветер </span><br/> 
									<div class="weather-info__aux__block">
										<span className="weather-info__aux__number">{tempSpeedData}</span> {tempSpeed}
										<span>{selectedTown.current.wind_dir}</span>
									</div>
									
									
								</div>
								<div>
									<span>влажность </span><br/>
									<span><span className="weather-info__aux__number">{selectedTown.current.humidity}</span> %</span>
								</div>
								<div>
									<span>давление </span><br/>
									<span><span className="weather-info__aux__number">{selectedTown.current.pressure_mb}</span>{" "}
										рт. ст.</span>
								</div>
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
				{showMap && <Map/>}
			</div>
		);
	}
}

export default WeatherContent;
