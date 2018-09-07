import React, { Component } from "react";
import "./WeatherContent.css"
class WeatherContent extends Component {
	render() {
		const { selectedTown, isCelsius, isKmPerHour, successRequest } = this.props;
		const tempText = isCelsius ? `C` : `F`;
		const tempSpeed = isKmPerHour ? `км/c` : `м/с`;
		let tempData = "";
		let tempSpeedData = "";
		let forecastObj;
		let forecastList;
		if (selectedTown.current) {
			tempData = isCelsius ? selectedTown.current.temp_c : selectedTown.current.temp_f;
		}
		if (selectedTown.current) {
			tempSpeedData = isKmPerHour ? selectedTown.current.wind_kph : selectedTown.current.wind_mph;
		}
		let message = "Выберите город";
		if (!successRequest) {
			message = "Неправильно введен город";
		}
		if (selectedTown.current) { 
			forecastObj = selectedTown.forecast.forecastday
			forecastList = forecastObj.map(item => <div className = "forecast-block">
														<span>{item.date}</span> 
														<span>{item.day.avgtemp_c}{tempText}</span> 
														<span>{item.day.avgtemp_f}</span>
														<span>{item.day.condition.text}</span>
													</div>)


		}

		
		
		
		return (
			<div className="weather-content">
				{Object.keys(selectedTown).length == 0 ? (
					message
				) : (
					<React.Fragment>

						<div className="weather-info">
							<div className="weather-info__descr">
								<img className="weather-info__img" src={selectedTown.current.condition.icon} />
							</div>

							<div className="weather-info__temp">
								<span>
									  {tempData} &#176; {tempText}
									<br />
								</span>
								<span>{selectedTown.current.condition.text}</span>
							</div>
							<div className="weather-info__aux">
								<span>
									{selectedTown.location.name}
									<br />
								</span>
								<span>
									{selectedTown.location.localtime}
									<br />
								</span>

								<span>
									ветер {tempSpeedData} {tempSpeed}
									<br />
								</span>
								<span>
									влажность {selectedTown.current.humidity} %<br />
								</span>
								<span>
									давление {selectedTown.current.pressure_mb} рт. ст.
									<br />
								</span>
							</div>
							
						</div>
						<div className="weather-info__forcast">
								Прогноз погоды
								{/*
								<div >
									<span>{selectedTown.forecast.forecastday[1].date}</span><br/>
									<span>{selectedTown.forecast.forecastday[1].day.avgtemp_c}</span><br/>
									<span>{selectedTown.forecast.forecastday[1].day.avgtemp_f}</span><br/>
									<span>{selectedTown.forecast.forecastday[1].day.condition.text}</span><br/>
								</div>
							*/}
								<div className="forecast__container">
									{forecastList}

								</div>
							
						</div>

					</React.Fragment>
				)}
			</div>
		);
	}
}

export default WeatherContent;
