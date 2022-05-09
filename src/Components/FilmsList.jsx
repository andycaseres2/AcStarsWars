import React from "react";
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import { Imgfilms } from "./Imgfilms";
import { images } from "../Services/dataImages";
import { Link } from "react-router-dom";

export const FilmsList = (film) => {
  return (
    <>
      <Link to={`/films/${film.episode_id}`}>
        <Box
          bg="#062e4e"
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
                  images.map(
                    (img) =>
                      img.id === film.episode_id && (
                        <Imgfilms key={img.title} {...img} />
                      )
                  )
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
      </Link>
    </>
  );
};
