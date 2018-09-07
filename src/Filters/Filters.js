import React, { Component } from "react";
import "./Filters.css";

const Filters = props => {
	let { switchTemp, isCelsius, switchSpeed, isKmPerHour } = props;

	return (
		<div className="filters">

			<div onClick={switchTemp} className="filter">
				<span className={isCelsius ? "" : "filter__active"}>in Farenheit</span>
				<span className={!isCelsius ? "" : "filter__active"}>in Celcius </span>
			</div>
			<div onClick={switchSpeed} className="filter">
				<span className={isKmPerHour ? "" : "filter__active"}>km/h</span>
				<span className={!isKmPerHour ? "" : "filter__active"}>m/h</span>
			</div>
		</div>
	);
};

export default Filters;
