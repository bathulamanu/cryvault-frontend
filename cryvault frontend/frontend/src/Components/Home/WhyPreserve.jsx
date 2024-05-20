import { Grid, Typography } from "@mui/material";
import React from "react";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import "./Home.css";
import useDeviceSize from "../../Utilities/useDeviceSize";

const WhyPreserve = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <>
      <div style={{ backgroundColor: "#88D4F2", position: "relative", marginTop: "55rem" }}>
        <img className="basketball" src="https://www.cryovault.in/wp-content/uploads/2024/01/busket-ball.png" alt=""></img>

        <div className="whyPreserveContent" style={{ padding: isMobile ? "10rem 2rem" : "15rem" }}>
          <Typography variant="h3" sx={{ textAlign: "center", color: "#00215C", fontWeight: "600" }}>
            Why Preserve Your Newborn Stem Cells
          </Typography>
          <div className={isMobile ? "shape_inMobile " :"shape_in "}>
            {" "}
            <img src="assets/images/med-img.svg" width="30" />
          </div>
          <Typography variant={isMobile ? "h5" : "h3"} sx={{ textAlign: "center" }}>
            Your newborn’s umbilical cord contains life-saving stem cells. They can be used to treat over 80 different diseases, including cancer, blood disorders, and immune system disorders. Banking your baby’s cord blood gives your child a chance to receive life-saving treatment with their stem cells, but may also give a chance to treat their siblings, parents, and other close relatives.
          </Typography>
        </div>

        <WhyPreserveCards />

       { isMobile ? null :  <img style={{ position: "absolute", bottom: "0", right: "50px" }} src="https://www.cryovault.in/wp-content/uploads/2024/01/cloud-3.png" alt=""/>}
      </div>
      <div className="shaps_inr">
        <img src="assets/images/home-1_section_04.png" />
      </div>
    </>
  );
};

export const WhyPreserveCards = React.memo(() => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <Grid
     item
      spacing={4}
      sx={{
        padding: isMobile ? " 0rem 3rem" : "4rem 6rem",
        flexGrow: 1,

        gap: " 2rem",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <Grid className="whyPreserveCard" container item xs={12} md={4} sm={12}>
        <WaterDropIcon sx={{ fontSize: "3rem" }} />
        <Typography variant="h4" gutterBottom>
          Amazing Potential
        </Typography>
        <Typography variant="h5" component="div">
          Each baby comes into this world with amazing potential to save or improve their own life or the life of others.
        </Typography>
      </Grid>
      <Grid className="whyPreserveCard" container item xs={12} md={4} sm={12}>
        <WaterDropIcon sx={{ fontSize: "3rem" }} />
        <Typography variant="h4" gutterBottom>
          Building Blocks
        </Typography>
        <Typography variant="h5" component="div">
          Stem cells are the “building blocks” or “master cells” of our bodies with the ability to become different types of cells.
        </Typography>
      </Grid>
      <Grid className="whyPreserveCard" container item xxs={12} md={4} sm={12}>
        <WaterDropIcon sx={{ fontSize: "3rem" }} />
        <Typography variant="h4" gutterBottom>
          Life-Saving
        </Typography>
        <Typography variant="h5" component="div">
          To date there have been over 60,000 cord blood transplants that have been performed worldwide. StemCyte provided 1 out of every 26 cord blood transplants
        </Typography>
      </Grid>
    </Grid>
  );
});

export default WhyPreserve;
