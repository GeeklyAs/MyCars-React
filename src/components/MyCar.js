import React, { Component } from "react"
import Car from './Car'

class MyCar extends Component {

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
        return (
            <div>
                <h1 onMouseOver={this.addStyle}>{this.props.titre}</h1>
                <p onCopy={this.noCopy}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quae nam, repellat cum aliquid laborum sit mollitia pariatur obcaecati consequatur?</p>
                <Car>Ford</Car>
                <Car color='black'></Car>
                <Car color='grey'>Range Rover</Car>   
            </div>
        )
    }
}

export default MyCar
