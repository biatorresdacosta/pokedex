import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';

const App = () => {
  const [pokemonName, setPokemonName] = useState('');
  const[pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon,setPokemon] = useState({
    name: '',
    species: '',
    img: '',
    attack: '',
    defense: '',
    type: '',

  });  //criar um estado c as info do poke
  
  const searchPokemon = () => { //API request aqui (com promise)
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
    (response) => { 
      setPokemon({
        name: pokemonName,
        species: response.data.species.name,
        img: response.data.sprites.front_default,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        type: response.data.types[0].type.name,
       });
       setPokemonChosen(true);
      }
    );
  };


  return (
    <div className="App">
      <div className='TitleSection'>
        

        <h1>Pesquise seu pokemon aqui!</h1>
        <input 
        type='text' 
        onChange = {(event) => {
          setPokemonName(event.target.value);

        }}
        />
        <button onClick={searchPokemon}>Pesquisar pokemon</button>
      </div>

      <div className='DisplaySection'> { !pokemonChosen ? ( <img className='quem' src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWUzajJ3YmdwODZ5a2hmM3plcTMyaGlobm1hMWQ5eDkxZjJtN21ydCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DRfu7BT8ZK1uo/giphy.gif' />
      ) : (
        <div>
        
        <img src ={pokemon.img} />

        <h4>Species: {pokemon.species}</h4>
        <h4>Type: {pokemon.type}</h4>
        <h4>Attack: {pokemon.attack}</h4>
        <h4>Defense: {pokemon.defense}</h4>



        </div>
        
        
        
        
        
        ) } 
        </div>
    </div>
  ); 
};

export default App;
