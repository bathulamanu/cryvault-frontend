import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useMemo } from "react";

const Stats = () => {
  const statsData = useMemo(() => {
    const data = [
      {
        number: " 53,926+",
        title: "HAPPY MOMs",
        image: "assets/images/happy-moms1.png",
      },
      {
        number: " 312",
        title: "OUR TEAM",
        image: "assets/images/teams1.png",
      },
      {
        number: "22",
        title: "AWARDS",
        image: "assets/images/awards1.png",
      },
      {
        number: "492+",
        title: "DEDICATED DOCTORS",
        image: "assets/images/dedicateddoctor1.png",
      },
    ];

    return data;
  }, []);
  console.log(statsData);
  return (
    <div style={{ position: "relative", padding: "5rem 15rem", border:"1px solid #e5e5e5" }}>
     <img  className=" butterflyImage butter_fly" src="assets/images/butterfly-4.webp" alt="Shape" />

      <Grid sx={{marginTop:"5rem"}} spacing={3} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 4, md: 4 }}>
        {statsData.map((data, index) => (
          <Grid spacing={3} xs={6} md={3} sm={4} sx={{ width: 50 }}>
            <Card className='statsCard' key={data.title}>
              <CardActionArea className="statsCardAction" sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                <CardMedia component="img" height="140" sx={{ width: "5rem" }} image={data.image} alt="green iguana" />
                <CardContent>
                  <Typography className="statsNumber" gutterBottom variant="h5" component="div">
                    {data.number}
                  </Typography>
                  <Typography className="statsTitle"  variant="body2" color="text.secondary">
                    {data.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Stats;
