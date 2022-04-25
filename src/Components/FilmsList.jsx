import React from "react";
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import { Imgfilms } from "./Imgfilms";
import { images } from "../Services/dataImages";

export const FilmsList = (film) => {
  return (
    <>
      <Box
        bg="#1A365D"
        w="280px"
        p={4}
        m={4}
        borderRadius="lg"
        overflow="hidden"
      >
        <Flex display="flex">
          <Text fontSize="xl">
            <div className="img">
              {!images ? (
                <div>Cargando...</div>
              ) : (
                images.map((img) => <Imgfilms key={img.title} {...img} />)
              )}
            </div>
            <strong>{film.title}</strong>
          </Text>
          <Spacer />
        </Flex>
        <Text mt={2}>Director: {film.director}</Text>
        <Text mt={2}>Producer: {film.producer}</Text>
        <Text mt={2}>Release Date: {film.release_date}</Text>
      </Box>
    </>
  );
};
