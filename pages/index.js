import Head from "next/head";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "1a0c6929a9132fc7d70882c9e7c5f5aa";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      console.log(results);
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <h1 className="active">Hello</h1>
    </div>
  );
}
