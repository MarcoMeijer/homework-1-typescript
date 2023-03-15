export type Oscar = {
  oscar: string;
  name: string;
  year: string;
}

export type MovieReference = {
  id: number;
  name: string;
}

export type MovieData = {
  id: string;
  actors: string[];
  desc: string;
  directors: string[];
  genre: string[];
  image_url: string;
  name: string;
  rating: number;
  year: number;
  oscars: Oscar[];
  relatedMovies: MovieReference[];
}
