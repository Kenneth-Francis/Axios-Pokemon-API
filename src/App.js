import {useState} from 'react';
import axios from 'axios';
import PokemonButton from './components/PokemonButton';
import PokemonDisplay from './components/PokemonDisplay';


function App() {

    const [pokemonList, setPokemonList] = useState([]);

    const getPokemon = () => {
        // Limit = 151 because First-Gen > The Rest...
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => {
            setPokemonList(res.data.results);
        });
    };


    return (
        <div className='App container col m-auto w-25'>

            <div className="row border border-3 rounded border-primary-subtle mb-4">
                <PokemonButton getPokemon={getPokemon} />
            </div>

            <div className="row border border-3 rounded border-warning-subtle">
                <PokemonDisplay pokemonList={pokemonList} />
            </div>

        </div>
    );
}

export default App;