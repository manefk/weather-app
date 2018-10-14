import React, { Component } from "react";
import { getGeo, codeLatLng } from "./utils/getGeo";
import TownList from "./TownList";
import WeatherContent from "./WeatherContent";
import Filters from "./Filters";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
library.add(faTimes);
library.add(faPlus);
library.add(faArrowCircleRight);
library.add(faArrowCircleLeft);

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
