import React from 'react'

//fonction fleché car on utilise pas de state ici

const Car = ({ children, color }) => { 
    
    let noCopyTwo = (e) => {
        alert('ne pas copier 2')
    }
    let addStyleTwo =(e) => {
        if (e.target.classList.contains('styled')) {
            e.target.classList.remove('styled')
        }else{
            e.target.classList.add('styled')
        }

    }

    const couleurInfo = color ? (<p>Couleur : { color }</p> ) : (<p>Couleur : Aucune couleur</p>) 
    if (children) {  
        return (
            <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
                <p onMouseOver={addStyleTwo} onCopy={noCopyTwo}>Marque : { children }</p>             
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
export default Car