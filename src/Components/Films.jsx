import React, { useState, useEffect } from "react";
import { FilmsList } from "./FilmsList";
import * as API from "../Services/settings";
import { Spinner } from "@chakra-ui/react";
import "./films.css";

export const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    API.getAllFilms().then(setFilms).catch(console.error);
  }, []);

  return (
    <div className="films">
      {!films.length === 0 ? (
        <Spinner color="red.500" size="xxl" />
      ) : (
        <section>
          {films.map((film) => (
            <FilmsList key={film.episode_id} {...film} />
          ))}
        </section>
      )}
    </div>
  );
};
