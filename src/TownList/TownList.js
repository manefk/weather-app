import React, { Component } from "react";
import Town from "./Town";
import TownInput from "./TownInput";
import "./TownList.css";

class TownList extends Component {
	render() {
		const { town, localStorageTowns } = this.props;

		const townNames = localStorageTowns && localStorageTowns.map((town, index) => <Town name={town} key={index} />);
		

		return (
			<div className="town-list">
				<TownInput />
				<ul>{townNames}</ul>
			</div>
		);
	}
}
export default TownList;
