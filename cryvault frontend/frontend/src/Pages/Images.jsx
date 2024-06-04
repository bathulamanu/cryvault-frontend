import React, { useState } from "react";
import GalleryImagesList from "../Components/Images/GalleryImagesList";
import ImageHero from "../Components/Images/ImageHero";
import ReachUs from "../Components/Common/ReachUs";
import { Box } from "@mui/material";
import useDeviceSize from "../Utilities/useDeviceSize";
import GalleryImagesCategory from "../Components/Images/GalleryImagesCategory";
const Images = () => {
  const [category , setCategory] = useState('All')
  return (
    <Box>
      <ImageHero />
      <GalleryImagesCategory  category={category} setCategory={setCategory}/>
      <GalleryImagesList category={category}/>
      <ReachUs />
    </Box>
  );
};

export default Images;
