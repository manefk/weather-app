import React from 'react';
import  WeatherContent from './WeatherContent'
import {AppContext} from '../Context';



export default (props) => {
	return (
		<AppContext.Consumer>
			{ ({townData, filters}) => <WeatherContent {...props} townData = {townData} filters = {filters}/>}
		</AppContext.Consumer>
	)
}