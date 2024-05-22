import { Box, Container, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useDeviceSize from "../../Utilities/useDeviceSize";
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}
const GalleryImagesList = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <ImageList className="thumbnail" sx={{ width: "100%", height: "100%" }} variant="quilted" cols={4}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} sx={{margin:"0 !important"}}>
            <Box className={"edu-blog gallerImg blog-style-list sal-animate"} sx={{margin:"0 !important"}}>
              <Box className="thumbnail" sx={{margin:"0 !important"}}>
                <Link to="#">
                  <img {...srcset(item.img, 121, item.rows, item.cols)} style={{ border: "1px solid #FF003F", borderRadius: "4px", width:"100%", height:"100%" }} alt={item.title} loading="lazy" />
                </Link>
              </Box>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default GalleryImagesList;
