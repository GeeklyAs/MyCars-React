import React, { Component } from "react"
import './App.css';
import MyCar from './components/MyCar';

class App extends Component {

  state = {
    titreVoiture : 'Mon catalogue Voiture'

}
  changeTitle = (e) => {
    // console.log(e.target)
    this.setState({
        titreVoiture : 'Mon nouveau titre'
    })
  }

  changeTitleViaParam = (titre) => {
    // console.log(e.target)
    this.setState({
      titreVoiture : titre
    })

  }
  changeTitleInput = (e) => {
    console.log(e.target.value)
    this.setState({
      titreVoiture : e.target.value
    })
  }

  render () {
    return (
      <div className="App">
        <MyCar titre={this.state.titreVoiture}/>
        <button onClick={this.changeTitle}>Changer le titre</button>
        <button onClick={() => this.changeTitleViaParam('Titre via un paramètre')}>modifier avec parametre</button>
        <input onChange={this.changeTitleInput} type="text" value={this.state.titreVoiture}/>
      </div>
    );
  }
}

export default App;
