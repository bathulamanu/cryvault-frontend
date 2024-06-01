import React from "react";
import ReachUs from "../Components/Common/ReachUs";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Box, Typography, Breadcrumbs, Link } from "@mui/material";
import useDeviceSize from "../Utilities/useDeviceSize";
const PregnancyChart = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <>
      <Box sx={{ padding: isMobile ? " 50px 7px !important" : "120px 40px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container" sx={{ margin: "0 !important", padding: "0 !important" }}>
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: isMobile ? "100% !important" : "70% !important" }}>
                <Typography  sx={{ fontSize: isMobile ? "24px !important" : "45px !important" }} variant={isMobile ? "h3" : "h1"} className="title">
                  Pregnancy Diet Chart
                </Typography>
           
              </Box>

              {isMobile ? null : (
                <Breadcrumbs aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="/pregnancy">
                    <Typography variant="body2" color="text.primary">
                      Pregnancy
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="text.primary">
                    Pregnancy Diet Chart
                  </Typography>
                </Breadcrumbs>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="py-4">
        <Box className="container">
          <Box className="section-title section-center sal-animate">
            <Typography variant="body1">
              You Should Eat During Pregnancy. It include 4 essential food groups in your
              <br /> pregnancy diet chart. Each of these contains Indian foods that will meet your
              <br /> nutritional needs as well as your baby’s.
            </Typography>
          </Box>
          {isMobile ? (
            <MobileDietTable />
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ textAlign: "center !important",}}>
                      <TableSortLabel>
                        <Typography variant="body2" sx={{ textAlign: "center !important", color: "white", fontSize: "2rem" }}>
                          Food
                        </Typography>
                      </TableSortLabel>
                    </TableCell>
                    <TableCell sx={{ textAlign: "center !important",}}>
                      <TableSortLabel>
                        <Typography variant="body2" sx={{ textAlign: "center !important", color: "white", fontSize: "2rem" }}>
                          Calorie (kcal)
                        </Typography>
                      </TableSortLabel>
                    </TableCell>
                    <TableCell sx={{ textAlign: "center !important",}}>
                      <TableSortLabel>
                        <Typography variant="body2" sx={{ textAlign: "center !important", color: "white", fontSize: "2rem" }}>
                          Proteins (gms)
                        </Typography>
                      </TableSortLabel>
                    </TableCell>
                    <TableCell sx={{ textAlign: "center !important",}}>
                      <TableSortLabel>
                        <Typography variant="body2" sx={{ textAlign: "center !important", color: "white", fontSize: "2rem" }}>
                          Benefits
                        </Typography>
                      </TableSortLabel>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ textAlign: "center !important", fontSize: "1.5rem" }}>
                      <b>VEGETABLES</b>
                      <br />
                      (Eat more dark-green veggies like broccoli, spinach, and other dark leafy greens)
                    </TableCell>
                    <TableCell sx={{ textAlign: "center !important", fontSize: "1.5rem" }}>47Kcal</TableCell>
                    <TableCell sx={{ textAlign: "center !important", fontSize: "1.5rem" }}>3.3g</TableCell>
                    <TableCell sx={{ textAlign: "center !important", fontSize: "1.5rem" }}>Vegetables are packed with powerful nutrients that support you and your baby.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ textAlign: "center !important", fontSize: "1.5rem" }}>
                      <b>MILK</b>
                      <br />
                      (Go low-fat or fat-free when you choose milk yogurt and other milk products)
                    </TableCell>
                    <TableCell sx={{ textAlign: "center !important", fontSize: "1.5rem" }}>8.20Kcal</TableCell>
                    <TableCell sx={{ textAlign: "center !important", fontSize: "1.5rem" }}>3.5g</TableCell>
                    <TableCell sx={{ textAlign: "center !important", fontSize: "1.5rem" }}>To get adequate amounts of calcium during pregnancy, drink three 8-ounce glasses (24 ounces) of nonfat milk each day.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ textAlign: "center !important", fontSize: "1.5rem" }}>
                      <b>FRUITS</b>
                      <br />
                      (Eat a variety of fruit. Choose fresh, frozen, canned, or dried fruit. Go easy on fruit juices.)
                    </TableCell>
                    <TableCell sx={{ textAlign: "center !important", fontSize: "1.5rem" }}>184Kcal</TableCell>
                    <TableCell sx={{ textAlign: "center !important", fontSize: "1.5rem" }}>22g</TableCell>
                    <TableCell sx={{ textAlign: "center !important", fontSize: "1.5rem" }}>Fruit are important sources of many nutrients, including potassium, fiber, vitamin C and folate (folic acid).</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ textAlign: "center !important", fontSize: "1.5rem" }}>
                      <b>GRAINS</b>
                      <br />
                      (Eat at least 3 oz. of whole-grain cereals, breads, crackers, rice, or pasta every day)
                    </TableCell>
                    <TableCell sx={{ textAlign: "center !important", fontSize: "1.5rem" }}>170g</TableCell>
                    <TableCell sx={{ textAlign: "center !important", fontSize: "1.5rem" }}>605kcal</TableCell>
                    <TableCell sx={{ textAlign: "center !important", fontSize: "1.5rem" }}>Grains are important sources of many nutrients, including fiber, B vitamins (thiamin, riboflavin, niacin and folate) and minerals (iron, magnesium and selenium).</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </Box>
      <br></br>
      <ReachUs />
    </>
  );
};

const foodData = [
  {
    food: "VEGETABLES",
    description: "(Eat more dark-green veggies like broccoli, spinach, and other dark leafy greens)",
    calories: "47kcal",
    benefits: "Packed with vitamins and minerals essential for you and your baby.",
    protein: "3.3g",
  },
  {
    food: "MILK",
    description: "(Choose low-fat or fat-free milk)",
    calories: "120kcal",
    benefits: "Rich source of calcium and vitamin D, important for bone health.",
    protein: "3.3g",
  },
  {
    food: "FRUITS",
    description: "(Eat a variety of fresh, frozen, or canned fruits)",
    calories: "60kcal",
    benefits: "Excellent source of vitamins, minerals, and fiber, promoting digestion and overall health.",
    protein: "3.3g",
  },
  {
    food: "WHOLE GRAINS",
    description: "(Choose whole-wheat bread, brown rice, or quinoa)",
    calories: "180kcal",
    benefits: "Provide sustained energy due to complex carbohydrates and fiber content.",
    protein: "3.3g",
  },
  {
    food: "LEAN PROTEIN",
    description: "(Chicken, fish, beans, or lentils)",
    calories: "150kcal",
    benefits: "Essential for building and repairing tissues, supporting growth and development.",
    protein: "3.3g",
  },
  {
    food: "HEALTHY FATS",
    description: "(Avocados, nuts, seeds, or olive oil)",
    calories: "120kcal",
    benefits: "Promote brain development, support cell function, and aid in nutrient absorption.",
    protein: "3.3g",
  },
];

export const MobileDietTable = () => {
  return (
    <Box>
      {foodData.map((item, index) => (
        <Box key={item.food} sx={{ display: "flex", flexDirection: "column", marginBottom: "2rem", padding: "1rem", backgroundColor: index % 2 === 0 ? "lightgray" : "white" }}>
          <Box sx={{ textAlign: "center !important", display: "flex", borderBottom: "1px solid", marginBottom: "1rem" }}>
            <Box sx={{ width: "40%", textAlign: "start !important" }}>
              <Typography variant="h4">Food</Typography>
            </Box>
            <Box sx={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography variant="h5">
                <b>{item.food}</b> <br /> {item.description}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: "center !important", display: "flex", borderBottom: "1px solid", marginBottom: "1rem" }}>
            <Box sx={{ width: "40%", textAlign: "start !important" }}>
              <Typography variant="h4">Calorie (kcal)</Typography>
            </Box>
            <Box sx={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography variant="h5" sx={{ textAlign: "start" }}>
                {item.calories}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: "center !important", display: "flex", borderBottom: "1px solid", marginBottom: "1rem" }}>
            <Box sx={{ width: "40%", textAlign: "start !important" }}>
              <Typography variant="h4">Proteins (gms)</Typography>
            </Box>
            <Box sx={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography variant="h5" sx={{ textAlign: "start" }}>
                {item.protein ? item.protein : "-"}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: "center !important", display: "flex", borderBottom: "1px solid", marginBottom: "1rem" }}>
            <Box sx={{ width: "40%", textAlign: "start !important" }}>
              <Typography variant="h4">Benefits</Typography>
            </Box>
            <Box sx={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography variant="h5" sx={{ textAlign: "start" }}>
                {item.benefits}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default PregnancyChart;
