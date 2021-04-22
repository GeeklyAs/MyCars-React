import React from 'react'

//fonction fleché car on utilise pas de state ici

const Car = ({ children, color }) => {

    const couleurInfo = color ? (<p>Couleur : { color }</p> ) : (<p>Couleur : Aucune couleur</p>) 
    if (children) {  
        return (
            <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
                <p>Marque : { children }</p>             
                { couleurInfo }
                
            </div>
        )     
    }else{
        return (
            <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
                <p>pas de voiture disponible</p> 
            </div>
        )
    }
}