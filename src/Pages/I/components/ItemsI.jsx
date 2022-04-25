import { useState, useEffect } from "react";
import { PeoplesList } from "./PeoplesList";
import * as API from "../services/settings";
import "./itemsI.css";

export const Items = () => {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    API.getAllPeople().then(setPeoples).catch(console.error);
  }, []);
  return (
    <div className="itemsI">
      {!peoples.length === 0 ? (
        <Spinner color="red.500" size="xxl" />
      ) : (
        <section>
          {peoples.map((people) => (
            <PeoplesList key={people.name} {...people} />
          ))}
        </section>
      )}
    </div>
  );
};
