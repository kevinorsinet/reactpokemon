import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet'
import "./Map.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import L from "leaflet";
import { useState, useCallback, useEffect} from 'react';
const pokemon = require('pokemon');
// console.log(pokemon.random());

export const Map = () => {
	const [, updateState] = useState();
	const forceUpdate = useCallback(()=>
		updateState({}),[]);
	const [pokemonList, setPokemonList] = useState([]);

	const onClick = ()=>{
		const pokename = pokemon.random('fr');
		const pokeId = pokemon.getId(pokename, 'fr');
		const newPokemon = 
			{
				position: [
					Math.random() * (46.95000000000000 - 46.93000000000000) + 46.93000000000000,
					Math.random() * ((-1.26000000000000) - (-1.30000000000000)) + (-1.30000000000000)
				],
				id: pokeId, 
				icon: L.icon({
					iconSize: [100, 100],
					iconAnchor: [10, 41],
					popupAnchor: [2, -40],
					iconUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`,
					shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
				}),
				name: pokename
			}
		pokemonList.push(newPokemon);
		forceUpdate();
		console.log(pokemonList);
	}

	// fetch pokemon
	// useEffect( () => {
	// 	(async () => {
	// 		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
	// 		const pokemonsList = await res.json()
	// 		console.log("data", pokemonsList.results);
	// 	})()
	
	// }, [])

	return (
		<>
		<h1 className="App-title">Carte de Pokémons (Vendée)</h1>
		<button className="Map-button" onClick={onClick}>Ajouter un pokémon sur la carte</button>
		<MapContainer
        center={[46.94015070213392, -1.28739595413208]}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
				// Url avec cle Api de Philippe
          url={"https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnVudGhlYXIiLCJhIjoiY2tkYTdnOHpmMGI3NDJxbXpoc2QwMXc3MyJ9.nu-giQ821MNuH64prgx2yg"}
          attribution='Pokémon Vendée'
        />
				{pokemonList.map((item, index) => (
					<Marker position={item.position} icon = {item.icon} key={index}>
						<Popup>
							{item.name}
						</Popup>
					</Marker>
				))}
      </MapContainer>
		</>
	)
}

