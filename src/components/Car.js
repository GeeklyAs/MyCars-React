import React from 'react'

//fonction fleché car on utilise pas de state ici

const Car = ({ children, color }) => {
    const couleurInfo = color ? (<p>Couleur : { color }</p> ) : (<p>Couleur : Aucune couleur</p>) 
    const marque = children ? (<p>Marque : { children }</p> ) : (<p>Marque : Aucune marque</p>)
    return (
        <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
            {marque}
            {couleurInfo}
        </div>

    )

}
export default Car