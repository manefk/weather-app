import React, { Component } from "react";
import "./Filters.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Filters = props => {
	let { filters, toggleFilters, toggleForecast, toggleMap, switchTemp, switchSpeed, changeDayAmount } = props;
	console.log(filters)
	let toggle = filters.showFilters ? "filters" : "filters filters" + "--toggle";
	const awesomeIcon = filters.showFilters ? "arrow-circle-right" : "arrow-circle-left";




	return (
		<div className={toggle}>
			<span className="toggle-filters" onClick = {toggleFilters}> <FontAwesomeIcon icon={awesomeIcon} className="arrow-icon" /></span>

			<div onClick={switchTemp} onDoubleClick={e => e.preventDefault()} className="filter">
				<span className={filters.isCelsius ? "" : "filter__active"}>in Farenheit</span>
				<span className={!filters.isCelsius ? "" : "filter__active"}>in Celcius </span>
			</div>
			<div onClick={switchSpeed} className="filter">
				<span className={filters.isKmPerHour ? "" : "filter__active"}>m/h</span>
				<span className={!filters.isKmPerHour ? "" : "filter__active"}>km/h</span>
			</div>
			<div onClick = {toggleForecast} className="filter">
				<span className={!filters.showForecast ? "filter__active" : ""}>current</span>
				<span className={filters.showForecast ? "filter__active" : ""}>forecast</span>
			</div>

			{filters.showForecast ? <input onChange = {changeDayAmount} type="number"/> : null}
			<div onClick = {toggleMap} className="filter">
				<span className={filters.showMap ? "filter__active" : ""}>show map</span>
				<span className={!filters.showMap ? "filter__active" : ""}>hide map</span>
			</div>
		</div>
	);
};

export default Filters;
