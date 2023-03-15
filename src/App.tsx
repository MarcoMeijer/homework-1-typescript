import { useEffect, useState } from 'react'
import './App.css'
import { Movie } from './components/Movie'
import { MovieData } from './types/movie'

function App() {
  const [hidden, setHidden] = useState<boolean>(false);

  const [movieData, setMovieData] = useState<MovieData | undefined>();

  const switchHidden = () => setHidden(!hidden);

  useEffect(() => {
    if (movieData === undefined) {
      fetch(`/data/movies.json`)
        .then((response) => response.json())
        .then((data) => setMovieData(data))
    }
  }, []);

    return (
      <div className="App">
        <label>  
          <input type="checkbox" checked={hidden} onChange={switchHidden}/>

          Hidden
        </label>      {
          movieData &&
          <Movie data={movieData} hidden={hidden} onSwitch={switchHidden}/>
        }
      </div>
    );
}

export default App
