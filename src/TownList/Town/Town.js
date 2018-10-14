import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Town = (props) => {
	const {		 handleClick, town, removeLocalStorage, name		} = props;
	
	const style = `town-list__town${props.town == props.name ? ` town-list__town--active` : "" }`

	return(
		<li className={style} onClick = {() => {handleClick(name)}}>
				
			<FontAwesomeIcon icon="times" onClick = {() => {removeLocalStorage(name)}} className="remove-town fa-sm" />
						
			<span>{name}</span>
		</li>
	)
}

export default Town;