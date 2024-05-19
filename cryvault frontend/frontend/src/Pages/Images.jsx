import React from "react";
import GalleryImagesList from "../Components/Images/GalleryImagesList";
import ImageHero from "../Components/Images/ImageHero";
import ReachUs from "../Components/Common/ReachUs";
import { Box } from "@mui/material";
import useDeviceSize from "../Utilities/useDeviceSize";
import GalleryImagesCategory from "../Components/Images/GalleryImagesCategory";
const Images = () => {
  return (
    <Box>
      <ImageHero />
      <GalleryImagesCategory/>
      <GalleryImagesList />
      <ReachUs />
    </Box>
  );
};

export default Images;
