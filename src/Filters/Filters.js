import React, { Component } from "react";

const Filters = props => {
	let { switchTemp, isCelsius, switchSpeed, isKmPerHour } = props;

	return (
		<div className="filters">
			<span onClick={switchTemp}>
				{isCelsius ? "Switch to Farehneit" : "Switch to Celsius"}
				<br />
			</span>
			<span onClick={switchSpeed}>
				{isKmPerHour ? "Switch to miles" : "Switch to km"}
			</span>
		</div>
	);
};

export default Filters;
