import styles from './Movie.module.css'
import { MovieData } from '../../types/movie';
import { useEffect, useState } from 'react';

interface MovieProps {
  data: MovieData
  hidden: boolean
  onSwitch: () => void
}

export const Movie = (props: MovieProps) => {
  const { data, onSwitch } = props;
  const {name, desc, relatedMovies} = data;
  const [hidden, setHidden] = useState<boolean>(props.hidden );
  const [image, setImage] = useState<string>("");

  if (props.hidden != hidden) {
    setHidden(props.hidden);
  }

  const fetchImage = async (url: string) => {
    const res = await fetch(url);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImage(imageObjectURL);
  };

  useEffect(() => {
    fetchImage(data.image_url);
  }, []);


  return (
    <div className={styles.movie}>
      <img src={image} width={240} height={360}/>
      <button
        onClick={() => {
          fetchImage("https://img.omdbapi.com/?i=tt3896198&h=1000&apikey=35972be8");
        }}
      >
        Higher resolution photo
      </button>
      <h1>{name}</h1>
      <h2>{desc}</h2>
      <button
        onClick={() => {
          setHidden(!hidden);
          onSwitch();
        }}
      >
        Toggle related movies
      </button>
      {
        hidden ||
        relatedMovies.map(({name, id}) => (
          <h2 key={id}>{name}</h2>
        ))
      }
    </div>
  )
}
