import React from 'react';
import  Filters from './Filters'
import {AppContext} from '../Context';



export default (props) => {
	return (
		<AppContext.Consumer>
			{ ({filters, toggleFilters, toggleForecast, toggleMap, changeDayAmount, switchTemp, switchSpeed}) => 
			<Filters {...props} filters = {filters} 
									   toggleFilters = {toggleFilters}
									   toggleForecast = {toggleForecast}
									   toggleMap = {toggleMap}
									   changeDayAmount = {changeDayAmount}
									   switchTemp = {switchTemp}
									   switchSpeed = {switchSpeed}
									   />}
		</AppContext.Consumer>
	)
}

//switchTemp, isCelsius, switchSpeed, isKmPerHour, toggleFilters, showFilters, showForecast, showMap, toggleForecast, toggleMap, changeDayAmount