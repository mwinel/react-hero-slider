import React, { Component } from "react";
import Slider from "./components/Slider";

import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Slider />
        </div>
      </div>
    );
  }
}

export default App;
