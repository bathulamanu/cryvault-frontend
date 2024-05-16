import { Container, Typography } from "@mui/material";
import React from "react";

const Videos = () => {
  const videos = ["https://www.youtube.com/embed/Vu9fBv86khI", "https://www.youtube.com/embed/kltxr92hgpg", "https://www.youtube.com/embed/HfZ13OjBk3c"];
  return (
    <div className="videoContainer">
      <img style={{top:"-55px"}} className="videoContainerImage" src='https://www.cryovault.in/wp-content/uploads/2024/01/home-1_section_05.png' />
      <Container>
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          Cryovault Stem cell banking
        </Typography>
        <br />
        <br />
        <br />
        <div style={{ display: "flex", gap: "2rem" }}>
        {videos.map((video) => (
            <iframe width="353" height="199" src={video} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="video" />
        ))}
        </div>
      </Container>
      <img style={{bottom:"-50px", transform:" rotate(180deg)"}} className="videoContainerImage" src='https://www.cryovault.in/wp-content/uploads/2024/01/home-1_section_05.png' />

    </div>
  );
};

export default Videos;
