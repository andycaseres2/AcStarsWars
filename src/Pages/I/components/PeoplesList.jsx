import { Box, Flex, Text, Spacer, Tag } from "@chakra-ui/react";

export const PeoplesList = (people) => {
  // const [planets, setPlanets] = useState({});

  // useEffect(() => {
  //   API.getAllPlanets().then(setPlanets).catch(console.error);
  // }, []);

  return (
    <>
      {" "}
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
            <strong>{people.name}</strong>
          </Text>
          <Spacer />
          <Tag
            color="black"
            p={2}
            colorScheme={
              people.gender === "male"
                ? "blue"
                : "pink" && people.gender === "n/a"
                ? "whiteAlpha"
                : "pink"
            }
          >
            {people.gender === "male"
              ? "male"
              : "n/a" && people.gender === "female"
              ? "female"
              : "n/a"}
          </Tag>
        </Flex>
        <Text mt={2}>Height: {people.height}</Text>
        <Text mt={2}>Mass: {people.mass}</Text>
        <Text mt={2}>Hair Color: {people.hair_color}</Text>
        <Text mt={2}>Skin Color: {people.skin_color}</Text>
        <Text mt={2}>Eye Color: {people.eye_color}</Text>
      </Box>
    </>
  );
};
