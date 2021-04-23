import React, { Component } from "react"
import Car from './Car'

class MyCar extends Component {

    state = {
        donneeVoiture : [
            {nom: 'ford', couleur: 'red', year: 2018},
            {nom: 'mercedes', couleur: 'black', year: 2009},
            {nom: 'ford', couleur: 'red', year: 2012}
        ],
        titre : 'Mon catalogue voiture 2'

    }

    addTenYear = () => {
        const updatedState = this.state.donneeVoiture.map((param) => {
            return param.year -= 10
        })
        this.setState({
            updatedState
        })
    }

    noCopy = () => {
        alert('merci de ne pas copier')
    }

    addStyle = (e) => {
        console.log(e.target)
        if (e.target.classList.contains('styled')) {
            e.target.classList.remove('styled')
        }else{
            e.target.classList.add('styled')
        }
    }
    render() {
        const year = new Date().getFullYear()
        return (
            <div>
                <button onClick={this.addTenYear}>Ajouter 10 ans</button>
                <h1 onMouseOver={this.addStyle}>{this.state.titre}</h1>
                <p onCopy={this.noCopy}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quae nam, repellat cum aliquid laborum sit mollitia pariatur obcaecati consequatur?</p>
                    { 
                        this.state.donneeVoiture.map((voiture, index) => {
                            return(
                                <div key={index}>

                                    <Car nom={voiture.nom} couleur={voiture.couleur} year={year - voiture.year + ' ans'}/>
                                </div>
                            )
                        }) 
                        
                    }
            </div>
        )
    }
}

export default MyCar
