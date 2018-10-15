import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import routes from "./routes";
import MapContainer from "./components/googleMapTest/MapContainer";
// import { transporter } from "./components/nodeMailerTests/NodeMailer";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            {routes}
            <MapContainer />
            {/* {transporter} */}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
