import React, { Component } from "react"
import './App.css';
import MyCar from './components/MyCar';

class App extends Component {

  state = {
    titreVoiture : 'Mon catalogue Voiture'

}


  render () {
    return (
      <div className="App">
        <MyCar titre={this.state.titreVoiture}/>
      </div>
    );
  }
}

export default App;
