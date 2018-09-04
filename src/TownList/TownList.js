import React, { Component } from "react";
import Town from "./Town/Town";
import TownInput from "./TownInput/TownInput";

class TownList extends Component {
	state = {
		localStorageTowns: JSON.parse(localStorage.getItem("myTown")) || []
		/*localStorageTown: localStorage.getItem('myTown') */
	};

	getLocalStorage = town => {
		const localStorageTowns = this.state.localStorageTowns.slice();

		this.props.getTownPromise(town).then(response => {
			
			if (response.status == 200 && !localStorageTowns.includes(town)) {

				localStorageTowns.push(town);

				this.setState(
					{
						localStorageTowns: localStorageTowns
					},
					() => {
						localStorage.setItem("myTown", JSON.stringify(this.state.localStorageTowns));
					}
				);
			}
		});
	};

	removeLocalStorage = town => {
		let localStorageTowns = this.state.localStorageTowns.slice();
		localStorageTowns = localStorageTowns.filter(item => item !== town);
		this.setState(
			{
				localStorageTowns: localStorageTowns
			},
			() => {
				localStorage.setItem("myTown", JSON.stringify(this.state.localStorageTowns));
			}
		);
	};

	render() {
		console.log(this.state.localStorageTowns);
		const { getDataOnClick } = this.props;
		const { localStorageTowns } = this.state;

		const townNames =
			localStorageTowns &&
			localStorageTowns.map((town, index) => (
				<Town
					removeLocalStorage={this.removeLocalStorage}
					town={this.props.town}
					handleClick={this.props.handleClick}
					name={town}
					key={index}
				/>
			));
		console.log(localStorage.getItem("myTown"));
		return (
			<div className="town-list">
				<TownInput
					//	getLocalStorage={this.getLocalStorage}
					getLocalStorage={this.getLocalStorage}
					removeLocalStorage={this.removeLocalStorage}
					getDataOnClick={getDataOnClick}
				/>
				<ul>{townNames}</ul>
			</div>
		);
	}
}
export default TownList;
