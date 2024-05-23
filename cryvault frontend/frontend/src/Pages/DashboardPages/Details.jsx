// import { Box, Typography } from "@mui/material";
// import React from "react";

// const Details = () => {
//   return (
//     <Box
//       sx={{
//         marginTop: "10rem",
//         width: "100%",
//         gap: "13px",
//         flexDirection: "column",
//         p: "20px",

//         background: "#e5e5e5",
//       }}
//     >
//       <Box sx={{ borderTopLeftRadius: "36px", borderTopRightRadius: "36px", alignSelf: "stretch", backgroundColor: "#805AD5", p: "18px" }}>
//         <Typography size="lg" as="h1" color="gray.50" ml={{ md: "41px", base: "0px" }} fontSize="26px" alignSelf="start">
//           Details
//         </Typography>
//       </Box>
//       <Box mt="82px" w={{ md: "88%", base: "100%" }} justifyContent="space-between" gap="20px" flexDirection={{ md: "row", base: "column" }} p={{ md: "", base: "20px" }} marginTop="20px">
//         <Box w={{ md: "44%", base: "100%" }} justifyContent="space-between" alignItems="center" gap="20px" flexDirection={{ base: "column", sm: "row" }}>
//           <Box gap="5px" w={{ base: "100%", sm: "47%" }} flexDirection="column" alignItems="start">
//             <Typography fontSize="3xl" mb="0" color="gray.500">
//               Mother’s Name
//             </Typography>
//             <Typography fontSize="4xl" mb="0">
//               {" "}
//               Manasa.M
//             </Typography>
//             <Box h="2px" bg="gray.400" alignSelf="stretch" w="100%" />
//           </Box>
//           <Box gap="5px" w={{ base: "100%", sm: "42%" }} flexDirection="column" alignItems="start">
//             <Typography fontSize="3xl" mb="0" color="gray.500">
//               Date of Birth
//             </Typography>
//             <Typography fontSize="4xl" mb="0">
//               {" "}
//               11-03-1996
//             </Typography>
//             <Box h="2px" bg="gray.400" alignSelf="stretch" w="100%" />
//           </Box>
//         </Box>
//         <Box w={{ md: "44%", base: "100%" }} justifyContent="space-between" alignItems="center" gap="20px" flexDirection={{ base: "column", sm: "row" }}>
//           <Box gap="5px" w={{ base: "100%", sm: "47%" }} flexDirection="column" alignItems="start">
//             <Typography fontSize="3xl" mb="0" color="gray.500">
//               Father’s Name
//             </Typography>
//             <Typography fontSize="4xl" mb="0">
//               {" "}
//               Hemanth
//             </Typography>
//             <Box h="2px" bg="gray.400" alignSelf="stretch" w="100%" />
//           </Box>
//           <Box gap="6px" w={{ base: "100%", sm: "42%" }} flexDirection="column" alignItems="start">
//             <Typography fontSize="3xl" mb="0" color="gray.500">
//               Date of Birth
//             </Typography>
//             <Typography fontSize="4xl" mb="0">
//               {" "}
//               11-03-1996
//             </Typography>
//             <Box h="2px" bg="gray.400" alignSelf="stretch" w="100%" />
//           </Box>
//         </Box>
//       </Box>
//       <Box mt="34px" w={{ md: "88%", base: "100%" }} justifyContent="space-between" gap="20px" flexDirection={{ md: "row", base: "column" }} p={{ md: "", base: "20px" }} marginTop="0px">
//         <Box w={{ md: "47%", base: "100%" }} justifyContent="space-between" gap="20px" flexDirection={{ base: "column", sm: "row" }}>
//           <Box w={{ base: "100%", sm: "47%" }} flexDirection="column" alignItems="start">
//             <Typography fontSize="3xl" mb="0" color="gray.500">
//               Email Address
//             </Typography>
//             <Typography fontSize="4xl" mb="0">
//               {" "}
//               manasa@gmail.com
//             </Typography>
//             <Box h="2px" bg="gray.400" alignSelf="stretch" w="100%" />
//           </Box>
//           <Box w={{ base: "100%", sm: "45%" }} flexDirection="column" alignItems="start">
//             <Typography fontSize="3xl" mb="0" color="gray.500">
//               Mobile Number
//             </Typography>
//             <Typography fontSize="4xl" mb="0">
//               {" "}
//               9999955555
//             </Typography>
//             <Box h="2px" bg="gray.400" alignSelf="stretch" w="100%" />
//           </Box>
//         </Box>
//         <Box w={{ md: "44%", base: "100%" }} justifyContent="space-between" gap="20px" flexDirection={{ base: "column", sm: "row" }}>
//           <Box w={{ base: "100%", sm: "47%" }} flexDirection="column" alignItems="start">
//             <Typography fontSize="3xl" mb="0" color="gray.500">
//               Email Address
//             </Typography>
//             <Typography fontSize="4xl" mb="0">
//               {" "}
//               hemanth@gmail.com
//             </Typography>
//             <Box h="2px" bg="gray.400" alignSelf="stretch" w="100%" />
//           </Box>
//           <Box w={{ base: "100%", sm: "42%" }} flexDirection="column" alignItems="start">
//             <Typography fontSize="3xl" mb="0" color="gray.500">
//               Mobile Number
//             </Typography>
//             <Typography fontSize="4xl" mb="0">
//               {" "}
//               9999977777
//             </Typography>
//             <Box h="2px" bg="gray.400" alignSelf="stretch" w="100%" />
//           </Box>
//         </Box>
//       </Box>
//       <Box mt="44px" w={{ md: "88%", base: "100%" }} justifyContent="space-between" gap="20px" flexDirection={{ md: "row", base: "column" }} p={{ md: "", base: "20px" }} marginTop="0px">
//         <Box w={{ md: "44%", base: "100%" }} justifyContent="space-between" alignItems="center" gap="20px" flexDirection={{ base: "column", sm: "row" }}>
//           <Box gap="6px" w={{ base: "100%", sm: "50%" }} flexDirection="column" alignItems="start">
//             <Typography fontSize="3xl" mb="0" color="gray.500">
//               Occupation
//             </Typography>
//             <Typography fontSize="4xl" mb="0">
//               {" "}
//               Teacher
//             </Typography>
//             <Box h="2px" bg="gray.400" alignSelf="stretch" w="100%" />
//           </Box>
//           <Box gap="6px" w={{ base: "100%", sm: "42%" }} flexDirection="column" alignItems="start">
//             <Typography fontSize="3xl" mb="0" color="gray.500">
//               Organization Name
//             </Typography>
//             <Typography fontSize="4xl" mb="0">
//               {" "}
//               Narayana School
//             </Typography>
//             <Box h="2px" bg="gray.400" alignSelf="stretch" w="100%" />
//           </Box>
//         </Box>
//         <Box w={{ md: "44%", base: "100%" }} justifyContent="space-between" alignItems="center" gap="20px" flexDirection={{ base: "column", sm: "row" }}>
//           <Box gap="6px" w={{ base: "100%", sm: "47%" }} flexDirection="column" alignItems="start">
//             <Typography fontSize="3xl" mb="0" color="gray.500">
//               Occupation
//             </Typography>
//             <Typography fontSize="4xl" mb="0">
//               {" "}
//               Bank Employee
//             </Typography>
//             <Box h="2px" bg="gray.400" alignSelf="stretch" w="100%" />
//           </Box>
//           <Box gap="4px" w={{ base: "100%", sm: "42%" }} flexDirection="column" alignItems="start">
//             <Typography fontSize="3xl" mb="0" color="gray.500">
//               Organization Name
//             </Typography>
//             <Typography fontSize="4xl" mb="0">
//               {" "}
//               SBI
//             </Typography>
//             <Box h="2px" bg="gray.400" alignSelf="stretch" w="100%" />
//           </Box>
//         </Box>
//       </Box>
//       <Box mt="35px" w={{ md: "88%", base: "100%" }} flexDirection="column" alignItems="start" p={{ md: "", base: "20px" }} marginTop="0px">
//         <Typography fontSize="3xl" mb="0" color="gray.500">
//           Address line-1
//         </Typography>
//         <Typography fontSize="4xl" mb="0">
//           {" "}
//           House no.12, Madavaram Apartments
//         </Typography>
//         <Box h="2px" mt="3px" bg="gray.400" alignSelf="stretch" w="100%" />
//       </Box>
//       <Box mt="27px" w={{ md: "88%", base: "100%" }} flexDirection="column" alignItems="start" p={{ md: "", base: "20px" }} marginTop="0px">
//         <Typography fontSize="3xl" mb="0" color="gray.500">
//           Address line-2{" "}
//         </Typography>
//         <Typography fontSize="4xl" mb="0">
//           {" "}
//           Madhapur- Hitech city road, Durgam cheruvu pillar no.1170.
//         </Typography>
//         <Box h="2px" mt="3px" bg="gray.400" alignSelf="stretch" w="100%" />
//       </Box>

//       <Box mt="35px" ml={{ md: "70px", base: "0px" }} gap="20px" alignSelf="start" w={{ md: "45%", base: "100%" }} alignItems="center" flexDirection={{ md: "row", base: "column" }} p={{ md: "", base: "20px" }} marginTop="0px">
//         <Box gap="2px" w={{ md: "46%", base: "100%" }} flexDirection="column" alignItems="start">
//           <Box gap="3px" alignSelf="stretch" flexDirection="column" alignItems="start">
//             <Typography fontSize="3xl" mb="0" color="gray.500">
//               Near Land Mark
//             </Typography>
//             <Typography fontSize="4xl" mb="0">
//               {" "}
//               Opp HDFC Bank Road
//             </Typography>
//             <Box h="2px" bg="gray.400" alignSelf="stretch" w="100%" />
//           </Box>
//         </Box>
//         <Box gap="3px" Box={1} flexDirection="column" alignItems="start" alignSelf="stretch">
//           <Typography fontSize="3xl" mb="0" color="gray.500">
//             City
//           </Typography>
//           <Typography fontSize="4xl" mb="0">
//             Hyderabad
//           </Typography>
//           <Box h="2px" bg="gray.400" alignSelf="stretch" w="100%" />
//         </Box>
//         <Box gap="3px" Box={1} flexDirection="column" alignItems="start" alignSelf="stretch">
//           <Typography fontSize="3xl" mb="0" color="gray.500">
//             State
//           </Typography>
//           <Typography fontSize="4xl" mb="0">
//             {" "}
//             Telangana
//           </Typography>
//           <Box h="2px" bg="gray.400" alignSelf="stretch" w="100%" />
//         </Box>
//       </Box>
//       <Box mt="39px" ml={{ md: "70px", base: "0px" }} gap="30px" alignSelf="start" w={{ md: "31%", base: "100%" }} alignItems="center" flexDirection={{ base: "column", sm: "row" }} p={{ md: "", base: "20px" }} marginTop="0px">
//         <Box gap="2px" w="100%" flexDirection="column" alignItems="start">
//           <Typography fontSize="3xl" mb="0" color="gray.500">
//             Pincode
//           </Typography>
//           <Typography fontSize="4xl" mb="0">
//             500089
//           </Typography>
//           <Box h="2px" bg="gray.400" alignSelf="stretch" w="100%" />
//         </Box>
//         <Box gap="2px" w="100%" flexDirection="column" alignItems="start">
//           <Typography fontSize="3xl" mb="0" color="gray.500">
//             Country
//           </Typography>
//           <Typography fontSize="4xl" mb="0">
//             India
//           </Typography>
//           <Box h="2px" bg="gray.400" alignSelf="stretch" w="100%" />
//         </Box>
//       </Box>
//     </Box>
//   );
// };
// export default Details;

import React from "react";
import { Box, Card, CardContent, Typography, TextField, Grid, useMediaQuery } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import "../../Components/DashboardComponents/Dashboard.css";
const useStyles = makeStyles((theme) => ({
  cardBox: {
    backgroundColor: "#2b2e64",
  },
}));

const Details = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box>
      <Card
        sx={{
          width: isMobile ? "90%" : "80vw",
          border: "0.5px solid lightgrey",
          borderRadius: "20px",
          margin: isMobile ? "10px" : "0px",
          backgroundColor: "#F8F9FC",
        }}
        style={{ marginLeft: isMobile ? "10px" : "20px" }}
      >
        <Box className={classes.cardBox} p={3}>
          <Typography sx={{ color: "white" }} variant="h4">
            Details
          </Typography>
        </Box>
        <CardContent>
          <Box mt={2} sx={{ padding: "20px" }}>
            <Grid container spacing={2}>
              <Grid xs={isMobile ? 12 : 6}>
                <Grid container spacing={2}>
                  <Grid item xs={4} style={{ marginRight: "2px",marginTop:"20px" }}>
                    <TextField
                      style={{
                        backgroundColor: "#e5e5e5 !important",
                        fontSize: "1rem",
                      }}
                      InputLabelProps={{ style: { fontSize: "1.25rem" } }}
                      InputProps={{ style: { backgroundColor: "#e5e5e5 !important", fontSize: "1.25rem" } }}
                      id="Mother's Name"
                      label="Mother's Name"
                      variant="standard"
                      fullWidth
                      // className="detailsInput"
                    />
                  </Grid>
                  <Grid item xs={4} style={{ marginRight: "2px",marginTop:"20px"  }}>
                    <TextField
                      style={{
                        backgroundColor: "#e5e5e5 !important",
                        fontSize: "1rem",
                      }}
                      InputLabelProps={{ style: { fontSize: "1.25rem" } }}
                      InputProps={{ style: { backgroundColor: "#e5e5e5 !important", fontSize: "1.25rem" } }}
                      id="Date of Birth"
                      label="Date of Birth"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4} style={{ marginRight: "2px",marginTop:"20px" }}>
                    <TextField
                      style={{
                        backgroundColor: "#e5e5e5 !important",
                        fontSize: "1rem",
                      }}
                      InputLabelProps={{ style: { fontSize: "1.25rem" } }}
                      InputProps={{ style: { backgroundColor: "#e5e5e5 !important", fontSize: "1.25rem" } }}
                      label="Mobile Number"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4} style={{ marginRight: "2px",marginTop:"20px" }}>
                    <TextField
                      style={{
                        backgroundColor: "#e5e5e5 !important",
                        fontSize: "1rem",
                      }}
                      InputLabelProps={{ style: { fontSize: "1.25rem" } }}
                      InputProps={{ style: { backgroundColor: "#e5e5e5 !important", fontSize: "1.25rem" } }}
                      label="Email Address"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4} style={{ marginRight: "2px",marginTop:"20px" }}>
                    <TextField
                      style={{
                        backgroundColor: "#e5e5e5 !important",
                        fontSize: "1rem",
                      }}
                      InputLabelProps={{ style: { fontSize: "1.25rem" } }}
                      InputProps={{ style: { backgroundColor: "#e5e5e5 !important", fontSize: "1.25rem" } }}
                      label="Occupation"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4} style={{ marginRight: "2px" }}>
                    <TextField
                      style={{
                        backgroundColor: "#e5e5e5 !important",
                        fontSize: "1rem",
                      }}
                      InputLabelProps={{ style: { fontSize: "1.25rem" } }}
                      InputProps={{ style: { backgroundColor: "#e5e5e5 !important", fontSize: "1.25rem" } }}
                      label="Organization Name"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>

              {/* Father's Details Grid */}
              <Grid item xs={isMobile ? 12 : 6}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TextField
                      style={{
                        backgroundColor: "#e5e5e5 !important",
                        fontSize: "1rem",
                      }}
                      InputLabelProps={{ style: { fontSize: "1.25rem" } }}
                      InputProps={{ style: { backgroundColor: "#e5e5e5 !important", fontSize: "1.25rem" } }}
                      label="Father's Name"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4} style={{ marginRight: "2px" }}>
                    <TextField
                      style={{
                        backgroundColor: "#e5e5e5 !important",
                        fontSize: "1rem",
                      }}
                      InputLabelProps={{ style: { fontSize: "1.25rem" } }}
                      InputProps={{ style: { backgroundColor: "#e5e5e5 !important", fontSize: "1.25rem" } }}
                      label="Date of Birth"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      style={{
                        backgroundColor: "#e5e5e5 !important",
                        fontSize: "1rem",
                      }}
                      InputLabelProps={{ style: { fontSize: "1.25rem" } }}
                      InputProps={{ style: { backgroundColor: "#e5e5e5 !important", fontSize: "1.25rem" } }}
                      label="Mobile Number"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4} style={{ marginRight: "2px" }}>
                    <TextField
                      style={{
                        backgroundColor: "#e5e5e5 !important",
                        fontSize: "1rem",
                      }}
                      InputLabelProps={{ style: { fontSize: "1.25rem" } }}
                      InputProps={{ style: { backgroundColor: "#e5e5e5 !important", fontSize: "1.25rem" } }}
                      label="Email Address"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      style={{
                        backgroundColor: "#e5e5e5 !important",
                        fontSize: "1rem",
                      }}
                      InputLabelProps={{ style: { fontSize: "1.25rem" } }}
                      InputProps={{ style: { backgroundColor: "#e5e5e5 !important", fontSize: "1.25rem" } }}
                      label="Occupation"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4} style={{ marginRight: "2px" }}>
                    <TextField
                      style={{
                        backgroundColor: "#e5e5e5 !important",
                        fontSize: "1rem",
                      }}
                      InputLabelProps={{ style: { fontSize: "1.25rem" } }}
                      InputProps={{ style: { backgroundColor: "#e5e5e5 !important", fontSize: "1.25rem" } }}
                      label="Organization Name"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>

              {/* Remaining Address Details */}
              <Grid item xs={12}>
                <TextField
                  style={{
                    backgroundColor: "#e5e5e5 !important",
                    fontSize: "1rem",
                  }}
                  InputLabelProps={{ style: { fontSize: "1.25rem" } }}
                  InputProps={{ style: { backgroundColor: "#e5e5e5 !important", fontSize: "1.25rem" } }}
                  label="Address line 1"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{
                    backgroundColor: "#e5e5e5 !important",
                    fontSize: "1rem",
                  }}
                  InputLabelProps={{ style: { fontSize: "1.25rem" } }}
                  InputProps={{ style: { backgroundColor: "#e5e5e5 !important", fontSize: "1.25rem" } }}
                  label="Address line 2"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  style={{
                    backgroundColor: "#e5e5e5 !important",
                    fontSize: "1rem",
                  }}
                  InputLabelProps={{ style: { fontSize: "1.25rem" } }}
                  InputProps={{ style: { backgroundColor: "#e5e5e5 !important", fontSize: "1.25rem" } }}
                  label="Near Land Mark"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  style={{
                    backgroundColor: "#e5e5e5 !important",
                    fontSize: "1rem",
                  }}
                  InputLabelProps={{ style: { fontSize: "1.25rem" } }}
                  InputProps={{ style: { backgroundColor: "#e5e5e5 !important", fontSize: "1.25rem" } }}
                  label="City"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  style={{
                    backgroundColor: "#e5e5e5 !important",
                    fontSize: "1rem",
                  }}
                  InputLabelProps={{ style: { fontSize: "1.25rem" } }}
                  InputProps={{ style: { backgroundColor: "#e5e5e5 !important", fontSize: "1.25rem" } }}
                  label="State"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  style={{
                    backgroundColor: "#e5e5e5 !important",
                    fontSize: "1rem",
                  }}
                  InputLabelProps={{ style: { fontSize: "1.25rem" } }}
                  InputProps={{ style: { backgroundColor: "#e5e5e5 !important", fontSize: "1.25rem" } }}
                  label="Pincode"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  style={{
                    backgroundColor: "#e5e5e5 !important",
                    fontSize: "1rem",
                  }}
                  InputLabelProps={{ style: { fontSize: "1.25rem" } }}
                  InputProps={{ style: { backgroundColor: "#e5e5e5 !important", fontSize: "1.25rem" } }}
                  label="Country"
                  variant="standard"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Details;
