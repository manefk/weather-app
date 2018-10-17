import React, { Component } from "react";
import "./Filters.css";

const Filters = props => {
	let { filters, toggleFilters, toggleForecast, toggleMap, switchTemp, switchSpeed, changeDayAmount } = props;
	let toggle = filters.showFilters ? "filters" : "filters filters" + "--toggle";
	const awesomeIcon = filters.showFilters ? "fa-arrow-circle-right" : "fa-arrow-circle-left";

	return (
		<div className={toggle}>
			<span className="toggle-filters" onClick = {toggleFilters}> <i className={`arrow-icon fas ${awesomeIcon}`}></i></span>

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
