import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TownInput.css";

class TownInput extends Component {
	state = {
		town: "",

	};

	render() {
		const {
		 town, getLocalStorage, removeLocalStorage, getDataOnClick
		} = this.props;
		return (
			<div className="town-list__input">
				<FontAwesomeIcon
					icon="plus"
					onClick={() => {
						getLocalStorage(this.state.town);
						this.setState({
							town: '',
						})
					}}
					className="remove-town fa-lg"
				/>
				<input
					className="town-input"
					value={this.state.town}
					onKeyPress={e => {
						e.key == "Enter" && getDataOnClick(this.state.town);
					}}
					placeholder="Введите город"
					onChange={event => {
						this.setState({ town: event.target.value });
					}}
				/>
				{/*<button className="input__button" onClick={() => {this.props.getDataOnClick(this.state.town)}}><img src="https://png.icons8.com/material-two-tone/50/000000/search.png"/></button> */}
			</div>
		);
	}
}
export default TownInput;
