import React from "react";
import ReachUs from "../Components/Common/ReachUs";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Grid, Box, Breadcrumbs, Link } from "@mui/material";
import useDeviceSize from "../Utilities/useDeviceSize";

const vaccines = [
  {
    age: "Birth",
    vaccine: "BCG<br/>OPV.O<br/>Hep-B1",
    description: "T.B.<br/>Oral Polio Vaccine<br/>Hepatitis-B Vaccine",
  },
  {
    age: "6 Weeks",
    vaccine: "DTwP1 or DTaP1<br/>IPV1<br/>Hib 1<br/>Hep-B2<br/>Rotavirus 1<br/>PCV 1",
    description: "ContentDiphtheria,Pertussis(Whooping Cough)and Tetanus<br/>Inactivated Injectable Polio Vaccine<br/>H.Influenzae Type B<br/>Hepatitis -B vaccine<br/>Pneumococcal Conjugate Vaccine for Pneumonia",
  },
  // ... add data for remaining rows
  {
    age: "10 to 12 Years",
    vaccine: "Tdap or Td<br/>HPV",
    description: "Tetanus,Diphtheria,Pertussis(Whooping Cough)<br/>Human papilloma Virus Vaccine For Cervical Cancer in Girls Only",
  },
];
const ImmunizationChart = () => {
  const isMobile = useDeviceSize() === "xs";
  return (
    <>
      <Box sx={{ padding: isMobile ? " 50px 7px !important" : "120px 90px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container">
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box sx={{ textAlign: isMobile ? " center" : "start ", width: isMobile ? "100% !important" : "70% !important" }}>
                <Typography variant={isMobile ? "h3" : "h1"} className="title">Immunization Chart</Typography>
              </Box>

              {isMobile ? null : (
                <Breadcrumbs aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="/pregnancy">
                    <Typography variant="body2" color="text.primary">
                      Pregnancy
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="text.primary">
                    Immunization Chart
                  </Typography>
                </Breadcrumbs>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      {isMobile ? (
        <MobileImmunizationTable />
      ) : (
        <Box className="container" sx={{ marginTop: "5rem" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography sx={{ textAlign: "center", color: "white", fontSize: "2rem" }} variant="body1">
                          Age
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ textAlign: "center", color: "white", fontSize: "2rem" }} variant="body1">
                          Vaccine
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ textAlign: "center", color: "white", fontSize: "2rem" }} variant="body1">
                          Description
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {vaccines.map((row) => (
                      <TableRow key={row.age}>
                        <TableCell>
                          <Typography variant="body2" sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                            {row.age}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                            {row.vaccine}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                            {row.description}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Box>
      )}

      <ReachUs />
    </>
  );
};
export const MobileImmunizationTable = () => {
  return (
    <Box className="container" sx={{ marginTop: "5rem" }}>
      {vaccines.map((item, index) => (
        <Box key={item.food} sx={{ display: "flex", flexDirection: "column", marginBottom: "2rem", padding: "1rem", backgroundColor: index % 2 === 0 ? "lightgray" : "white" }}>
          <Box sx={{ textAlign: "center !important", display: "flex", borderBottom: "1px solid", marginBottom: "1rem" }}>
            <Box sx={{ width: "40%", textAlign: "start !important" }}>
              <Typography variant="h4">Age</Typography>
            </Box>
            <Box sx={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography variant="h5">{item.age}</Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: "center !important", display: "flex", borderBottom: "1px solid", marginBottom: "1rem" }}>
            <Box sx={{ width: "40%", textAlign: "start !important" }}>
              <Typography variant="h4">Vaccine</Typography>
            </Box>
            <Box sx={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography variant="h5" sx={{ textAlign: "start" }}>
                {item.vaccine}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: "center !important", display: "flex", borderBottom: "1px solid", marginBottom: "1rem" }}>
            <Box sx={{ width: "40%", textAlign: "start !important" }}>
              <Typography variant="h4">Description</Typography>
            </Box>
            <Box sx={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography variant="h5" sx={{ textAlign: "start" }}>
                {item.description}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default ImmunizationChart;
