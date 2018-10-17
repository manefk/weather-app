import React, { Component } from "react";
import { getGeo, codeLatLng } from "./utils/getGeo";
import TownList from "./TownList";
import WeatherContent from "./WeatherContent";
import Filters from "./Filters";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<TownList />
				<WeatherContent />
				<Filters />
			</div>
		);
	}
}

export default App;
