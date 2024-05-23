import {
  Box,
  Card,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Grid,
  useMediaQuery, // Import the useMediaQuery hook
} from "@mui/material";
import React from "react";

const Invoices = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); // Check if the screen is mobile size

  const invoicesData = [
    {
      id: 1,
      invoiceNumber: "INV001",
      date: "2024-04-18",
      amount: 100,
      status: "Pending",
    },
    {
      id: 2,
      invoiceNumber: "INV002",
      date: "2024-04-17",
      amount: 150,
      status: "Completed",
    },
    {
      id: 3,
      invoiceNumber: "INV003",
      date: "2024-04-16",
      amount: 200,
      status: "Ongoing",
    },
  ];

  return (
    <Grid container>
      <Grid item xs={12} md={8} lg={6}>
        <Card
          sx={{
            width: isMobile ? "90%" : "80vw", // Adjust width based on screen size
            height: "90vh",
            borderRadius: "20px",
            backgroundColor:"#F8F9FC",
            margin: isMobile ? "10px" : "0px",
          }}
          style={{ marginLeft: isMobile ? "10px" : "20px" }}
        >
          <Box
            sx={{
              color: "white",
              backgroundColor: "#2b2e64",
              padding: "20px",
            }}
          >
            <Typography  sx={{
              color: "white",
            }} variant="h4">Invoice Number</Typography>
          </Box>
          <TableContainer sx={{backgroundColor:"#F8F9FC"}}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      border: "none",
                      fontWeight: "bold",
                      textAlign: "center",
                      background: "none",
                      fontSize: "1.5rem",
                    }}
                  >
                    Invoice Number
                  </TableCell>
                  <TableCell
                    style={{
                      border: "none",
                      fontWeight: "bold",
                      textAlign: "center",
                      background: "none",
                      fontSize: "1.5rem",
                    }}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    style={{
                      border: "none",
                      fontWeight: "bold",
                      textAlign: "center",
                      background: "none",
                      fontSize: "1.5rem",
                    }}
                  >
                    Amount
                  </TableCell>
                  <TableCell
                    style={{
                      border: "none",
                      fontWeight: "bold",
                      textAlign: "center",
                      background: "none",
                      fontSize: "1.5rem",
                    }}
                  >
                    Status
                  </TableCell>
                  <TableCell
                    style={{
                      border: "none",
                      fontWeight: "bold",
                      textAlign: "center",
                      background: "none",
                      fontSize: "1.5rem",
                    }}
                  >
                    View
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {invoicesData.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell style={{ border: "none", textAlign: "center", fontSize: "1.5rem" }}>{invoice.invoiceNumber}</TableCell>
                    <TableCell style={{ border: "none", textAlign: "center", fontSize: "1.5rem" }}>{invoice.date}</TableCell>
                    <TableCell style={{ border: "none", textAlign: "center", fontSize: "1.5rem" }}>{invoice.amount}</TableCell>
                    <TableCell style={{ border: "none", textAlign: "center", fontSize: "1.5rem" }}>
                      <Box className="tableCellWithCircle" sx={{ backgroundColor: invoice.status === "Completed" ? "#01d501" : invoice.status === "Pending" ? "yellow" : "#ff9e9e " }}>
                        {" "}
                        {invoice.status}
                      </Box>
                    </TableCell>
                    <TableCell style={{ border: "none", textAlign: "center", fontSize: "1.5rem" }}>Checkout</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Invoices;
