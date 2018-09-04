import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Town = (props) => {

	const style = `town-list__town${props.town == props.name ? ` town-list__town--active` : "" }`

	return(
		<li className={style} onClick = {() => {props.handleClick(props.name)}}>
				
			<FontAwesomeIcon icon="times" onClick = {() => {props.removeLocalStorage(props.name)}} className="remove-town fa-sm" />
						
			<span>{props.name}</span>
		</li>
	)
}

export default Town;