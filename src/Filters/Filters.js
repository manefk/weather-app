import React, { Component } from "react";
import "./Filters.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Filters = props => {
	let { switchTemp, isCelsius, switchSpeed, isKmPerHour, toggleFilters, showFilters, showForecast, toggleForecast, changeDayAmount } = props;
	let toggle = showFilters ? "filters" : "filters filters" + "--toggle";
	const awesomeIcon = showFilters ? "arrow-circle-right" : "arrow-circle-left";


	return (
		<div className={toggle}>
			<span className="toggle-filters" onClick = {toggleFilters}> <FontAwesomeIcon icon={awesomeIcon} className="arrow-icon" /></span>

			<div onClick={switchTemp} onDoubleClick={e => e.preventDefault()} className="filter">
				<span className={isCelsius ? "" : "filter__active"}>in Farenheit</span>
				<span className={!isCelsius ? "" : "filter__active"}>in Celcius </span>
			</div>
			<div onClick={switchSpeed} className="filter">
				<span className={isKmPerHour ? "" : "filter__active"}>m/h</span>
				<span className={!isKmPerHour ? "" : "filter__active"}>km/h</span>
			</div>
			<div onClick = {toggleForecast} className="filter">
				<span className={!showForecast ? "filter__active" : ""}>current</span>
				<span className={showForecast ? "filter__active" : ""}>forecast</span>
			</div>
			{showForecast ? <input onChange = {changeDayAmount} type="number"/> : null}

			
		</div>
	);
};

export default Filters;
