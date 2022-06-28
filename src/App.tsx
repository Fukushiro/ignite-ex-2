import { useEffect, useState } from "react";

import { Button } from "./components/Button";
import { MovieCard } from "./components/MovieCard";

// import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import { api } from "./services/api";

import "./styles/global.scss";

import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

// interface GenreResponseProps {
//   id: number;
//   name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
//   title: string;
// }
interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function App() {
  const [selectedGenre, setSelectedGenre] = useState<number>(-1);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        selectedGenreId={selectedGenre}
        setSelectedGenreId={setSelectedGenre}
      />
      <Content selectedGenreId={selectedGenre} />
    </div>
  );
}
