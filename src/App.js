
import './App.css';
import React, {useState, useEffect} from "react";

import SearchIcon from './search.svg';
import MovieCard from './components/MovieCard';

function App() {

  //6466a503
  const API_URL = "https://www.omdbapi.com/?apikey=6466a503";
  
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className='App'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input placeholder='Search for movies' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
        <img src={SearchIcon} alt="Search" onClick={()=>searchMovies(searchTerm)} />
      </div>
      {
        movies?.length > 0 
        ? (
          <div className='container'>
            {
              movies.map((movie)=>(
                <MovieCard movie={movie} />
              ))
            }
            
          </div>
        ) : (
          <div className='empty'>
            <h2>No Movies found</h2>
          </div>
        )
      }
      
    </div>
  );
}

export default App;
