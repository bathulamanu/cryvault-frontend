import { Container, Typography } from "@mui/material";
import React from "react";
import useDeviceSize from "../../Utilities/useDeviceSize";

const Videos = () => {
  const isMobile = useDeviceSize() === 'xs'

  const videos = ["https://www.youtube.com/embed/Vu9fBv86khI", "https://www.youtube.com/embed/kltxr92hgpg", "https://www.youtube.com/embed/HfZ13OjBk3c"];
  return (
    <div className="videoContainer" style={{padding: isMobile ? "3rem 0rem" :"10rem "}} >
      <img style={{top: isMobile ? " -15px" : "-55px"}} className="videoContainerImage" src='https://www.cryovault.in/wp-content/uploads/2024/01/home-1_section_05.png' />
      <Container>
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          Cryovault Stem cell banking
        </Typography>
        <br />
        <br />
        <br />
        <div style={{ display: "flex", gap: "2rem", flexDirection: isMobile ? "column" :"row" }}>
        {videos.map((video) => (
            <iframe key={video} width="353" height="199" src={video} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="video" />
        ))}
        </div>
      </Container>
      <img style={{bottom: isMobile ? " -15px" : "-50px", transform:" rotate(180deg)"}} className="videoContainerImage" src='https://www.cryovault.in/wp-content/uploads/2024/01/home-1_section_05.png' />

    </div>
  );
};

export default Videos;
