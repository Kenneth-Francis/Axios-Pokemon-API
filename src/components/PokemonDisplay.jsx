import React from 'react';
    
const PokemonDisplay = (props) => {

    return (
        <div className="card-body">
            <div className="card shadow">
                <div className="card-header">
                    <h3 className="text-warning-emphasis">PokemonDisplay.jsx</h3>
                </div>

                <div className="card-body">
                    <ul className="list-group">
                        {
                            props.pokemonList.map(
                                (eachPokemon, idx) => {
                                    return (
                                        <li key={idx} className='list-group-item fs-5'>
                                            <span className="text-warning">{idx + 1}</span>:  {eachPokemon.name.charAt(0).toUpperCase() + eachPokemon.name.slice(1)}
                                        </li>
                                    )
                                }
                            )
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default PokemonDisplay;