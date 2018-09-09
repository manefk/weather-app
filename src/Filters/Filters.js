import React, { Component } from "react";
import "./Filters.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Filters = props => {
	let { switchTemp, isCelsius, switchSpeed, isKmPerHour, toggleFilters, showFilters, toggleForecast } = props;
	let toggle = showFilters ? "filters" : "filters filters" + "--toggle";
	const awesomeIcon = showFilters ? "arrow-circle-right" : "arrow-circle-left"

	return (
		<div className={toggle}>
			<span class="toggle-filters" onClick = {toggleFilters}> <FontAwesomeIcon icon={awesomeIcon} className="arrow-icon" /></span>

			<div onClick={switchTemp} className="filter">
				<span className={isCelsius ? "" : "filter__active"}>in Farenheit</span>
				<span className={!isCelsius ? "" : "filter__active"}>in Celcius </span>
			</div>
			<div onClick={switchSpeed} className="filter">
				<span className={isKmPerHour ? "" : "filter__active"}>km/h</span>
				<span className={!isKmPerHour ? "" : "filter__active"}>m/h</span>
			</div>

			<label class="filters__forecast"> Show forecast 
			<input onChange = {toggleForecast} type="checkbox"/>
			</label>
		</div>
	);
};

export default Filters;
