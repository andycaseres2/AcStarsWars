import React from "react";
import { Heading, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./menuI.css";

export const MenuI = () => {
  return (
    <>
      <Box>
        <ul className="Menu">
          <Link to="/I/Characters">Characters</Link>
          <Link to="/Planets">Planets</Link>
          <Heading className="logo" align="center" as="h1" size="xl" m={4}>
            I{" "}
          </Heading>
          <Link to="/Starships">Starships</Link>
          <Link to="/Species">Species</Link>
        </ul>
      </Box>
    </>
  );
};
