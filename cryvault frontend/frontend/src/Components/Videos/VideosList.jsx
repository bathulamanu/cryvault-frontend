import { Box, Grid, Container } from "@mui/material";
import React, { useEffect } from "react";
import useDeviceSize from "../../Utilities/useDeviceSize";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../../redux/reducers/HomePageReducer";

const VideosList = () => {
  const isMobile = useDeviceSize() === "xs";
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.home.videos);
  useEffect(() => {
    dispatch(getVideos());
  }, []);
  return (
    <Container sx={{ width: "100%", marginTop: "5rem" }}>
      <Grid container rowSpacing={1} colSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        {videos?.map((video) => (
          <Grid sx={{ height: " 35rem" }} item xs={12} md={6}>
            <iframe key={"video"} width="100%" height="100%" src={video.description || "https://www.youtube.com/embed/Vu9fBv86khI"} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="video" />
          </Grid>
        ))}

      </Grid>
    </Container>
  );
};
export default VideosList;
