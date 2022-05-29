import { Stack, Text, Flex, Box, Spacer } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import * as API from "../Services/settings";
import { useParams } from "react-router-dom";

export const FilmsDetails = () => {
  const [details, setDetails] = useState([]);
  const { filmsId } = useParams();

  useEffect(() => {
    API.getAllFilms(filmsId).then(setDetails).catch(console.error);
  }, [filmsId]);

  console.log(details.characters);

  return (
    <>
      {details.map((film) => (
        <Stack key={film.episode_id}>
          <Box
            w="280px"
            bg="#062e4e"
            p={4}
            m={4}
            borderRadius="lg"
            overflow="hidden"
          >
            <Flex display="flex">
              <Text fontSize="xl">
                <strong>{film.title}</strong>
              </Text>
              <Spacer />
            </Flex>
            <Text mt={2}>Director: {film.director}</Text>
            <Text mt={2}>Producer: {film.producer}</Text>
            <Text mt={2}>Release Date: {film.release_date}</Text>
          </Box>
        </Stack>
      ))}
    </>
  );
};
