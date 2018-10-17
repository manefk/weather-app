import React, { Component } from "react";
import { createContext } from "react";
import { getGeo, codeLatLng } from "./utils/getGeo";

const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    town: "",
    townData: {},
    coordinates: [],
    filters: {
      isCelsius: true,
      isKmPerHour: true,
      successRequest: true,
      showForecast: false,
      showMap: false,
      showFilters: true,
      daysAmount: 7
    },

    localStorageTowns: JSON.parse(localStorage.getItem("myTown")) || []
  };
  getTownPromise = town =>
  console.log('days',this.state.filters.daysAmount) ||    fetch(`http://api.apixu.com/v1/forecast.json?key=b2ba067623484cd9ab9135213181308&q=${town}&lang=en&days=${this.state.filters.daysAmount}`);

  getTownData = town => {
    this.getTownPromise(town).then(response => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${response.status}`);
        this.setState({
          successRequest: false,
          townData: {}
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
  getLocalStorage = town => {
    const localStorageTowns = this.state.localStorageTowns.slice();

    this.getTownPromise(town).then(response => {
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
  toggleFilters = () => {
    let filters = { ...this.state.filters };
    filters.showFilters = !filters.showFilters;
    this.setState({
      filters
    });
  };

  toggleForecast = () => {
    let filters = { ...this.state.filters };
    filters.showForecast = !filters.showForecast;
    this.setState({
      filters
    });
  };
  toggleMap = () => {
    let filters = { ...this.state.filters };
    filters.showMap = !filters.showMap;
    this.setState({
      filters
    });
  };
  switchTemp = () => {
    let filters = { ...this.state.filters };
    filters.isCelsius = !filters.isCelsius;
    console.log(filters);
    this.setState({ filters });
  };
  switchSpeed = () => {
    let filters = { ...this.state.filters };
    filters.isKmPerHour = !filters.isKmPerHour;
    console.log(filters);
    this.setState({ filters });
  };

  changeDayAmount = e => {
    let filters = { ...this.state.filters };
    filters.daysAmount = e.target.value;
    this.setState({ filters });
    console.log('e.target.value', e.target.value);
    console.log('filters',filters);
    this.getTownData(this.state.townData.location.name);
  };

  componentDidMount() {
    let res = getGeo();
    res.then(position => {
      this.setState({
        coordinates: [position.coords.latitude, position.coords.longitude]
      });
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      codeLatLng(lat, lng)
        .then(response => response.json()
        .then(town => this.getTownData("Kaluga")));
    });
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          getTownData: this.getTownData,
          handleClick: this.handleClick,
          getLocalStorage: this.getLocalStorage,
          removeLocalStorage: this.removeLocalStorage,
          toggleFilters: this.toggleFilters,
          switchTemp: this.switchTemp,
          switchSpeed: this.switchSpeed,
          changeDayAmount: this.changeDayAmount,
          toggleForecast: this.toggleForecast,
          toggleMap: this.toggleMap
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContext, AppProvider };
