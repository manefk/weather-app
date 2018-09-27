import React, {Component} from "react";

const AppContext = React.createContext()

class AppProvider extends Component {
  state = {
    number : 10
  }

render() {
    return <AppContext.Provider value={this.state}>
      {this.props.children}
    </AppContext.Provider>
  }
}


export default AppProvider