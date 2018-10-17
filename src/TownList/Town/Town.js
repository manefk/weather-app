import React, {Component} from 'react';



const Town = (props) => {
	const {	handleClick, town, removeLocalStorage, name		} = props;
	
	const style = `town-list__town${props.town == props.name ? ` town-list__town--active` : "" }`

	return(
		<li className={style} onClick = {() => {handleClick(name)}}>
				
			<i 
				onClick = {() => {removeLocalStorage(name)}} 
				className="remove-town fas fa-times fa-sm" />
						
			<span>{name}</span>
		</li>
	)
}

export default Town;