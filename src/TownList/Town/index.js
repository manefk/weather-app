import React from 'react';
import  Town from './Town'
import {AppContext} from '../../Context';

export default (props) => {
	return (
		<AppContext.Consumer>
			{({town, handleClick, removeLocalStorage}) => 
			<Town 	{...props} 
					town={town}
					removeLocalStorage = {removeLocalStorage}
					handleClick = {handleClick}
			/>
			
		}
		</AppContext.Consumer>
	)
}
