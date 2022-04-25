import React from "react";
import { Heading, Box } from "@chakra-ui/react";
import "./menu.css";

export const Menu = () => {
  return (
    <>
      <Box>
        <ul className="Menu">
          <Heading className="logo" align="center" as="h1" size="xl" m={4}>
            AcStar Wars{" "}
          </Heading>
        </ul>
      </Box>
    </>
  );
};
