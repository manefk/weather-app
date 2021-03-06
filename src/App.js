import React, { Component } from "react";

import TownList from "./TownList/TownList";
import WeatherContent from "./WeatherContent/WeatherContent";
import Filters from "./Filters/Filters";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);
library.add(faPlus);

class App extends Component {
  state = {
    town: "Калуга",
    townData: {},
    isCelsius: true,
    isKmPerHour: true,
    successRequest: true,

  }

  getTownPromise = town => fetch(
      `http://api.apixu.com/v1/current.json?key=b2ba067623484cd9ab9135213181308&q=${town}&lang=ru`
    )
  

  getTownData = (town, func) => {
    let f = func || function() {}
  
    this.getTownPromise(town).then(response => {
    
      if (response.status !== 200) {
        console.log(
          `Looks like there was a problem. Status Code: ${response.status}`
        );
        this.setState({
          successRequest: false,
          townData: {}
        });
      
      } 
      else {
        
        response.json().then(data => {
          this.setState({
            townData: data,
            successRequest: true
          });
        });
      }
    });
    console.log(f)
   
  };

  handleClick = town => {
    this.getTownData(town);
    this.setState({
      town: town
    });
  };

  switchTemp = () => {
    this.setState({ isCelsius: !this.state.isCelsius });
  };
  switchSpeed = () => {
    this.setState({
      isKmPerHour: !this.state.isKmPerHour
    });
  };
  /*
   componentDidMount() {
    const {town} = this.state;
    }
  */
  render() {
    let { town, townData, isCelsius, isKmPerHour, successRequest } = this.state;

    return (
      <div className="App">
        <TownList
          town={town}
          handleClick={this.handleClick}
          getDataOnClick={this.getTownData}
          getTownPromise = {this.getTownPromise}
          successRequest={successRequest}
          selectedTown={townData}
        />
        <WeatherContent
          selectedTown={townData}
          isCelsius={isCelsius}
          isKmPerHour={isKmPerHour}
          successRequest={successRequest}
        />
        <Filters
          switchTemp={this.switchTemp}
          switchSpeed={this.switchSpeed}
          isCelsius={isCelsius}
          isKmPerHour={isKmPerHour}
        />
      </div>
    );
  }
}

export default App;
