import React from "react";
import { Heading, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import "./menu.css";

export const Menu = () => {
  return (
    <>
      <Box>
        <ul className="Menu">
          <Heading className="logo" align="center" as="h1" size="xl" m={4}>
            <Link to="/">
              <Image top="25px" position="relative" width="180px" src={logo} />
            </Link>
          </Heading>
        </ul>
      </Box>
    </>
  );
};
