import React, { Component } from "react";
import "./Filters.css";

const Filters = props => {
	let { switchTemp, isCelsius, switchSpeed, isKmPerHour, toggleFilters, showFilters } = props;
	let toggle = showFilters ? "filters" : "filters filters" + "--toggle"

	return (
		<div className={toggle}>
			<span onClick = {toggleFilters}> remove filters</span>

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
