import React, {Component} from "react";
import {createContext} from 'react';
import {getGeo, codeLatLng} from "./utils/getGeo";

const AppContext = React.createContext()

class AppProvider extends Component {
  state = {
    townData: {},
    isCelsius: true,
    isKmPerHour: true,
    successRequest: true,
    showForecast: false,
    coordinates: [],
    showMap: false,

  }

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

render() {
    return <AppContext.Provider value={{...this.state}}>
    
      {this.props.children}
    </AppContext.Provider>
  }
}

export {AppContext, AppProvider}
