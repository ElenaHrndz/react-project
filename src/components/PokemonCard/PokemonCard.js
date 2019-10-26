import React from 'react';

const PokemonCard = ({title, subtitle, image, type, weaknesses}) => {

    return (
        <div className="column highlight">
            <div className="card">
                <div className="card-content">
                    <p className="title">{ title }</p>
                    <p className="subtitle">{ subtitle }</p>
                    <img className="image" src={image}></img>
                    <p>Type: {type.map(type => `${type} `)}</p>
                    <p>Weaknesses: {weaknesses.map(weaknesses => `${weaknesses} `)}</p>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;

