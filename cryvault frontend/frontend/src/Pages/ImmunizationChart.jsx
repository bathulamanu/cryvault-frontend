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
                <Typography  sx={{ fontSize: isMobile ? "24px !important" : "45px !important" }} variant={isMobile ? "h3" : "h1"} className="title">
                  Immunization Chart
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
      

        <Box className="py-4 mt-4">
          <Box className="container">
            <Table>
              <TableHead>
                <TableRow className="table-header">
                  <TableCell sx={{ textAlign: "center !important", color: "white", fontSize: "2rem" }} id="" className="" colspan="">
                    <span className="data-table-header-text">Age</span>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center !important", color: "white", fontSize: "2rem" }} id="" className="" colspan="">
                    <span className="data-table-header-text">Vaccine</span>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center !important", color: "white", fontSize: "2rem" }} id="" className="" colspan="">
                    <span className="data-table-header-text">Description</span>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>Birth</TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    BCG
                    <br />
                    OPV.O
                    <br />
                    Hep-B1
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    T.B.
                    <br />
                    Oral Polio Vaccine
                    <br />
                    Hepatitis-B Vaccine
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>6Weeks</TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    DTwP1 or DTaP1
                    <br />
                    IPV1
                    <br />
                    Hib 1<br />
                    Hep-B2
                    <br />
                    Rotavirus 1<br />
                    PCV 1
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    ContentDiphtheria,Pertussis(Whooping Cough)and Tetanus
                    <br />
                    Inactivated Injectable Polio Vaccine
                    <br />
                    H.Influenzae Type B<br />
                    Hepatitis -B vaccine
                    <br />
                    Pneumococcal Conjugate
                    <br />
                    Vaccine for Pneumonia
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    DTwP2 or DTaP2
                    <br />
                    IPV@
                    <br />
                    Hib 2<br />
                    Hep 2<br />
                    Rotavirus 2<br />
                    PCV 2
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    Diphtheria,Pertussis(Whooping Cough)and Tetanus
                    <br />
                    Inactivated Injectable Polio Vaccine
                    <br />
                    H.Influenzae Type B<br />
                    Hepatitis -B vaccine
                    <br />
                    Pneumococcal Conjugate Vaccine for Pneumonia
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>14 Weeks</TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    DTwP3 or DTaP3
                    <br />
                    IPV3
                    <br />
                    Hib 3<br />
                    Hep 3<br />
                    Rotavirus 3<br />
                    PCV 3
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    Diphtheria,Pertussis(Whooping Cough)and Tetanus
                    <br />
                    Inactivated Injectable Polio Vaccine
                    <br />
                    H.Influenzae Type B<br />
                    Hepatitis -B vaccine
                    <br />
                    Pneumococcal Conjugate Vaccine for Pneumonia
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>6 Months</TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    Hep-B3
                    <br />
                    Opv1
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    Hepatitis-B vaccine
                    <br />
                    Measle,Mumps,Rubella
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>9 Months</TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    OPV2
                    <br />
                    MMR1
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    Oral Pollo Vaccine
                    <br />
                    Measle,Mumps,Rubella
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>12 months</TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    Hepatitis A1
                    <br />
                    Typar
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    Hepatitis A<br />
                    Typhoid Vaccine
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>15 Months</TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    MMR2
                    <br />
                    varicella 1<br />
                    PCV Booster
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    Measle,Mumps,Rubella
                    <br />
                    Chicken Pox
                    <br />
                    Pneumococcal Conjugate Vaccine for Pneumonia
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>16-18 Months</TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    DTwP Booster 1 or DTaP
                    <br />
                    Booster1
                    <br />
                    IPV Booster 1<br />
                    Hib Booster 1
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    Diphtheria,Pertussis(Whooping Cough)and Tetanus
                    <br />
                    Inactivated Injectable Polio Vaccine
                    <br />
                    H.Influenzae Type B
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>18 months</TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    Hepatitis A2
                    <br />
                    Typhoid booster
                  </TableCell>
                  <TableCell>&nbsp;</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>2 Years</TableCell>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell>&nbsp;</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    4 1/2 Years
                    <br />5 Years
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    DTwP Booster 2 or DTaP
                    <br />
                    Booster2
                    <br />
                    OPV3
                    <br />
                    Typhoid 2<br />
                    Varicella 2
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    Diphtheria,Pertussis(Whooping Cough)and Tetanus
                    <br />
                    Oral Pollo Vaccine
                    <br />
                    Chicken Pox
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>10 to 12 Years</TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    Tdap or Td
                    <br />
                    HVP
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.5rem" }}>
                    Tetanus,Diphtheria,Pertussis(Whooping Cough)
                    <br />
                    Human papilloma Virus Vaccine For Cervical Cancer in Girls Only
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
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
