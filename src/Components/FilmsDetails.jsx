import React, { useState, useEffect } from "react";
import * as API from "../Services/settings";

export const FilmsDetails = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    API.getAllFilms().then(setDetails).catch(console.error);
  }, []);

  return <div>FilmsDetails{details.title}</div>;
};
