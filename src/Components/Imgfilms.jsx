import { Image } from "@chakra-ui/react";
import React from "react";

export const Imgfilms = (img) => {
  return (
    <>
      <Image src={img.image} alt={img.title} />{" "}
    </>
  );
};
