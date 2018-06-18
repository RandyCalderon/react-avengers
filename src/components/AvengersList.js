import React from 'react';

const AvengersList = props => {
    return(
    <div>
    {props.avengersData.map(avengers => (
       
            <div key={avengers.id} avengers={avengers}>
                <ul>
                <li>Name: {avengers.name}</li>
                <li>Species: {avengers.species}</li>
                <li>Weapons: {avengers.weapon}</li>
                </ul>
            </div>
    
    ))}
    </div>
);
}

export default AvengersList;