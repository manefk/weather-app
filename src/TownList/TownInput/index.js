import React from 'react';
import  TownInput from './TownInput'
import {AppContext} from '../../Context';

export default (props) => {
	return (
		<AppContext.Consumer>
			{({ town, getLocalStorage, removeLocalStorage, getTownData}) => 
			<TownInput  {...props}
						town = {town} 
						getDataOnClick={getTownData}
						getLocalStorage = {getLocalStorage}
						removeLocalStorage = {removeLocalStorage}
			/>
		}
		</AppContext.Consumer>
	)
}
