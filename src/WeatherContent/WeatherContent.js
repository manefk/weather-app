import moment from "moment";
import React, { Component } from "react";
import WeatherMap from "./Map/WeatherMap.js";
import "./WeatherContent.css";
import {AppProvider, AppContext} from "../Context.js";


class WeatherContent extends Component {
	render() {		
		const {
			townData,
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
		if (townData.current) {
			tempData = isCelsius
				? townData.current.temp_c
				: townData.current.temp_f;
		}
		if (townData.current) {
			tempSpeedData = isKmPerHour
				? townData.current.wind_kph
				: townData.current.wind_mph;
		}
		if (townData.current) {
			tempDataFeelsLike = isCelsius
				? townData.current.feelslike_c
				: townData.current.feelslike_f;
		}
		let message = "Выберите город";
		if (!successRequest) {
			message = "Неправильно введен город";
		}
		if (townData.current) {
			forecastObj = townData.forecast.forecastday;
			forecastList = forecastObj.map((item, index) => (
				<div className="forecast-block" key={index}>
					<span>{moment(item.date).format("LLLL")}</span>
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
		return 'jkjkj'
		// return (
			
				
		// 				<div className="weather-content">

		// 					{Object.keys(context.townData).length == 0 ? (
		// 						message
		// 					) : (
		// 						<React.Fragment>
		// 							<div className="weather-info">
		// 								<div className="weather-info__main">
		// 									<span className="weather-info__name">
		// 										{context.townData.location.name}
		// 										<br />
		// 									</span>
		// 									<span className="weather-info__time">
		// 										{moment(
		// 											context.townData.location.localtime
		// 										).format("LLLL")}
		// 										<br />
		// 									</span>
		// 									<span className="weather-info__degree">
		// 										{tempData}
		// 										&#176;
		// 										{tempText}
		// 										<br />
		// 									</span>
		// 									<span className="weather-info__feelslike">
		// 										Feels like {tempDataFeelsLike}
		// 										&#176;
		// 										{tempText}
		// 										<br />
		// 									</span>
		// 									<span className="weather-info__descr">
		// 										{
		// 											context.townData.current.condition
		// 												.text
		// 										}
		// 									</span>
		// 								</div>
		// 								<div className="weather-info__aux">
		// 									<div>
		// 										<span>ветер </span>
		// 										<br />
		// 										<div class="weather-info__aux__block">
		// 											<span className="weather-info__aux__number">
		// 												{tempSpeedData}
		// 											</span>{" "}
		// 											{tempSpeed}
		// 											<span>
		// 												{
		// 													context.townData.current
		// 														.wind_dir
		// 												}
		// 											</span>
		// 										</div>
		// 									</div>
		// 									<div>
		// 										<span>влажность </span>
		// 										<br />
		// 										<span>
		// 											<span className="weather-info__aux__number">
		// 												{
		// 													context.townData.current
		// 														.humidity
		// 												}
		// 											</span>{" "}
		// 											%
		// 										</span>
		// 									</div>
		// 									<div>
		// 										<span>давление </span>
		// 										<br />
		// 										<span>
		// 											<span className="weather-info__aux__number">
		// 												{
		// 													context.townData.current
		// 														.pressure_mb
		// 												}
		// 											</span>{" "}
		// 											рт. ст.
		// 										</span>
		// 									</div>
		// 								</div>
		// 							</div>
		// 							<div className={forecastStyle}>
		// 								<h2>Прогноз погоды</h2>

		// 								<div className="forecast__container">
		// 									{forecastList.slice(1)}
		// 								</div>
		// 							</div>
		// 							{showMap && (
		// 								<div className="weather-info__forcast">
		// 									<WeatherMap
		// 										coordinates={[
		// 											context.townData.location.lat,
		// 											context.townData.location.lon
		// 										]}
		// 									/>
		// 								</div>
		// 							)}
		// 						</React.Fragment>
		// 					)}
		// 				</div>
					
			
			
		// );
	}
}

export default WeatherContent;
