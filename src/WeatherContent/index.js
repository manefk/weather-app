import React from 'react';
import  WeatherContent from './WeatherContent'
import {AppContext} from '../Context';



export default (props) => {
	return (
		<AppContext.Consumer>{(townData) => {
				console.log(townData)
			return <WeatherContent {...props} townData = {townData}/>
		}


		}</AppContext.Consumer>
	)
}