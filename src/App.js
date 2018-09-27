import React, { Component } from 'react';
import Image1 from "./image/1.PNG";
import Image2 from "./image/2.PNG";

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2> 1st image</h2>
        <img src={Image1} />
        <h2> 2nd image</h2>
       <img src={Image2} />
      </div>
    );
  }
}

export default App;
