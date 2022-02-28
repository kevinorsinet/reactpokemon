import './App.css';
import {Map} from'./components/Map';
import {Search} from './components/Search';
import {useState} from 'react';

function App() {
  const [content, setContent] = useState('map');  

  return (
    <div className="App">
      <button className="Map-button" onClick={()=>setContent('map')}>Carte des pokémons</button>
      <button className="Map-button" onClick={()=>setContent('search')}>Rechercher un pokémon</button>
      <div style={{ width: '100%', height: '800px'}}>
        {content === 'map' ? <Map /> : <Search />}
      </div>
    </div>
  );
}

export default App;