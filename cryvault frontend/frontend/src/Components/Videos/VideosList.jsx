import { Box, Grid, Container } from "@mui/material";
import React from "react";

const VideosList = () => {
  return (
    <Container sx={{ width: "100%", marginTop: "5rem" }}>
      <Grid container rowSpacing={1} colSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid sx={{height:" 35rem"}} item xs={12} md={6}>
          <iframe key={"video"} width="100%" height="100%" src={"https://www.youtube.com/embed/Vu9fBv86khI"} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="video" />
        </Grid>
        <Grid sx={{height:" 35rem"}} item xs={12} md={6}>
          <iframe key={"video"} width="100%" height="100%" src={"https://www.youtube.com/embed/Vu9fBv86khI"} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="video" />
        </Grid>
        <Grid sx={{height:" 35rem"}} item xs={12} md={6}>
          <iframe key={"video"} width="100%" height="100%" src={"https://www.youtube.com/embed/Vu9fBv86khI"} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="video" />
        </Grid>
        <Grid sx={{height:" 35rem"}} item xs={12} md={6}>
          <iframe key={"video"} width="100%" height="100%" src={"https://www.youtube.com/embed/Vu9fBv86khI"} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="video" />
        </Grid>
      </Grid>
    </Container>
  );
};
export default VideosList;
