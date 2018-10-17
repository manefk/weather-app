import React, { Component } from "react";
import "./TownInput.css";

class TownInput extends Component {
	state = {
		town: ""
	};

	render() {
		const { town, getLocalStorage, removeLocalStorage, getDataOnClick } = this.props;
		return (
			<div className="town-list__input">
				<i
					onClick={() => {
						getLocalStorage(this.state.town);
						this.setState({
							town: ""
						});
					}}
					className="remove-town fas fa-plus fa-lg"
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
			</div>
		);
	}
}
export default TownInput;
