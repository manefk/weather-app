import React, { Component } from "react";
import {getGeo, codeLatLng} from "./utils/getGeo";
import TownList from "./TownList/TownList";
import WeatherContent from "./WeatherContent";
import Filters from "./Filters/Filters";
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
  state = {
    town: "",
    townData: {},
    isCelsius: true,
    isKmPerHour: true,
    successRequest: true,
    forecast: false,
    showFilters: true,
    showForecast: false,
    showMap: false,
    daysAmount: 7,
    coordinates:[],
  };

  changeDayAmount = e => {
  
    this.setState({ daysAmount: e.target.value });
    this.getTownData(this.state.townData.location.name);
  };

  getTownPromise = town =>
    fetch(
      `http://api.apixu.com/v1/forecast.json?key=b2ba067623484cd9ab9135213181308&q=${town}&lang=en&days=${
        this.state.daysAmount
      }`
    );

  getTownData = town => {
    this.getTownPromise(town).then(response => {
      if (response.status !== 200) {
        console.log(
          `Looks like there was a problem. Status Code: ${response.status}`
        );
        this.setState({
          successRequest: false,
          townData: {},

        });
      } else {
        response.json().then(data => {
          this.setState({
            townData: data,
            successRequest: true
          });
        });
      }
    });
  };

  handleClick = town => {
    this.getTownData(town);
    this.setState({
      town: town
    });
  };

  switchTemp = () => {
    this.setState(prevState => { 
      return {
       isCelsius: !prevState.isCelsius  
      }
      
    });
  };
  switchSpeed = () => {
    this.setState(prevState => {
      return {
        isKmPerHour: !prevState.isKmPerHour
      }
      
    });
  };
  
   componentDidMount() {
    let res = getGeo();
    res.then(position => {
      this.setState(
      {
        coordinates: [position.coords.latitude, position.coords.longitude]
      })
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      codeLatLng(lat,lng)
        .then(response => response.json()
                          .then(town => this.getTownData(town.results[0].address_components[1].short_name)))
    })
    
    }
  
  toggleFilters = () => {
    this.setState((prevState, props) => {
      return {
        showFilters: !prevState.showFilters
      }  
    });
  };
  
  toggleForecast = () => {
    this.setState(prevState => {
      return {
          showForecast: !prevState.showForecast
      }
    
    });
  };
  toggleMap = () => {
    this.setState(prevState =>{
      return {
        showMap: !prevState.showMap
      }
      
    });
  };
  toggle = (something) => {
    this.setState(
    {
      [something]: !this.state[something]
    })
  }

  render() {
    let {
      town,
      townData,
      isCelsius,
      isKmPerHour,
      successRequest,
      showForecast,
      showMap
    } = this.state;
   

    return (
      <div className="App">
    
          <TownList
            town={town}
            handleClick={this.handleClick}
            getDataOnClick={this.getTownData}
            getTownPromise={this.getTownPromise}
            successRequest={successRequest}
          
          />
      
          
          <WeatherContent
          
            isCelsius={isCelsius}
            isKmPerHour={isKmPerHour}
            successRequest={successRequest}
            showForecast={showForecast}
            coordinates = {this.state.coordinates}
            showMap={showMap}
          />

        <Filters
          switchTemp={this.switchTemp}
          switchSpeed={this.switchSpeed}
          isCelsius={isCelsius}
          isKmPerHour={isKmPerHour}
          toggleFilters={this.toggleFilters}
          showFilters={this.state.showFilters}
          toggleForecast={this.toggleForecast}
          showForecast={showForecast}
          getTownData={this.getTownData}
          getTownPromise={this.getTownPromise}
          changeDayAmount={this.changeDayAmount}
          toggleMap = {this.toggleMap}
          showMap={showMap}
        />
      </div>
    );
  }
}

export default App;
