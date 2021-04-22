import React, { Component } from "react"
import Car from './Car'

class MyCar extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.titre}</h1>
                <Car color='red'></Car>
                <Car>Mercedes</Car>
                <Car color='grey'>Range Rover</Car>

                
            </div>
        )
    }
}

export default MyCar
