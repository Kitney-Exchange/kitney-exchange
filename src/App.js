import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import routes from "./routes";
import ScrollToTop from "react-router-scroll-top";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <ScrollToTop>
            <div className="App">{routes}</div>
          </ScrollToTop>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
