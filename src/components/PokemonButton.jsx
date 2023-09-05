const PokemonButton = (props) => {

    const handleClick = (e) => {
        e.preventDefault();

        props.getPokemon();
    }


    return (
        <div className="card-body">
            <div className="card shadow">

                <div className="card-header">
                    <h3 className="text-primary-emphasis">PokemonButton.jsx</h3>
                </div>

                <div className="card-body m-auto">
                    <button className='btn btn-primary' type="submit" onClick={handleClick}>Get List of Pokemon!</button>
                </div>
            
            </div>
        </div>
    )
}

export default PokemonButton;