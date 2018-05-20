import React, { Component } from 'react';
import './App.css'
import Navbar from './components/customNavbar'
import Rows from './components/rows'

class App extends Component {
  render() {
    return (
      <div className="App">
<Navbar/>
<Rows/>
      </div>
    );
  }
}

export default App;
