import React from 'react';
import  TownList from './TownList'
import {AppContext} from '../Context';



export default (props) => {
	return (
		<AppContext.Consumer>
			{({town, handleClick, getTownData, getTownPromise, filters, localStorageTowns, getLocalStorage, removeLocalStorage}) => 
			<TownList {...props} getDataOnClick={getTownData}
								 getTownPromise={getTownPromise}
								 successRequest={filters.successRequest}
								 handleClick={handleClick}
								 town={town}
								 localStorageTowns = {localStorageTowns}
								 getLocalStorage = {getLocalStorage}
								 removeLocalStorage = {removeLocalStorage}
		/>
			
		}
		</AppContext.Consumer>
	)
}