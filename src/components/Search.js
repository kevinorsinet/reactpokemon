
import {useEffect, useState, useCallback } from 'react';
import "./Search.css";
const pokemon = require('pokemon');
// console.log(pokemon.all());

export const Search= () => {

	// fetch pokemon
	// useEffect( () => {
	// 	(async () => {
	// 		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
	// 		const pokemonsList = await res.json()
	// 		console.log("data", pokemonsList.results);
	// 	})()
	
	// }, [])

	const [pokemonList, setPokemonList] = useState(pokemon.all('fr'));
	const [search, setSearch] = useState("");
	const [image, setImage] = useState("");
  console.log(pokemonList);
	return (
		<>
		<h2 className="App-title">Recherche</h2>
<label>Pokédex: </label>
		<input
          type="text"
          placeholder="Rechercher un pokémon..."
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
			<div className="Pokedex">
	
	    <table>
          <thead>
            <tr>
              <th></th>
              <th>Numéro</th>
              <th>Nom</th>
            </tr>
          </thead>
          <tbody>
            {pokemonList
              .filter((item) => {
                const name= item
                  .toLowerCase()
                  .includes(search.toLowerCase());

                if (name) {
                  return true;
                } else {
                  return false;
                }
              })
              .map((filteredItem) => {
                return (
                  <tr onClick={()=>setImage(filteredItem)}>
										<td><img alt={filteredItem} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.getId(filteredItem,'fr')}.png`}></img></td>
                    <td>{pokemon.getId(filteredItem,'fr')}</td>
										<td className="PokeName">{filteredItem}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
				{image !== '' && <img className="PokeImage" alt={image} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.getId(image,'fr')}.png`}></img>}
			 <div>

									
			 </div>
			</div>
		</>
	)
}

