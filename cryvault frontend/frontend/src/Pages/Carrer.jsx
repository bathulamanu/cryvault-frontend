import React from "react";
import Breadcum from "../Components/Common/Breadcum";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
const Carrers = () => {
  return (
    <>
      <Box className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container">
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box style={{ width: "100%" }}>
                <Typography variant="h1" className="title">
                  Carrers
                </Typography>
              </Box>

              {isMobile ? null : (
                <Breadcrumbs aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="/pregnancy">
                    <Typography variant="body2" color="text.primary">
                      About
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="text.primary">
                    Carrers
                  </Typography>
                </Breadcrumbs>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="account-page-area section-gap-equal">
        <Box className="container position-relative">
          <Box className="row g-5 justify-content-center">
            <Box className="col-lg-12">
              <Box className="login-form-box">
                <Box className="section-title section-center sal-animate">
                  <span className="pre-title pre-textsecondary">Work with us</span>
                  <h2 className="title">Drop your Resume</h2>
                  <Box className="shape_in shape_in-bk" style={{ display: "flex", justifyContent: "center" }}>
                    {" "}
                    <img src="assets/images/med-img blk.svg" width="30" />
                  </Box>
                  <p>join our mission to connect the right talent with the Right Opportunity.</p>
                </Box>

                <Box className="form-group col-md-12">
                  <label>Let's build together the best place to work....! *</label>
                </Box>
                <form>
                  <Box className="d-flex">
                    <Box className="form-group mr-4">
                      <Box className="edu-form-check">
                        <input type="radio" id="mr" name="payment" />
                        <label for="mr">Mr</label>
                      </Box>
                    </Box>
                    <Box className="form-group mr-4">
                      <Box className="edu-form-check">
                        <input type="radio" id="mrs" name="payment" />
                        <label for="mrs">Mrs</label>
                      </Box>
                    </Box>
                    <Box className="form-group mr-4">
                      <Box className="edu-form-check">
                        <input type="radio" id="ms" name="payment" />
                        <label for="ms">Ms</label>
                      </Box>
                    </Box>
                    <Box className="form-group mr-4">
                      <Box className="edu-form-check">
                        <input type="radio" id="dr" name="payment" />
                        <label for="dr">Dr</label>
                      </Box>
                    </Box>
                  </Box>

                  <Box className="row">
                    <Box className="form-group col-md-6">
                      <label for="current-log-email">First Name*</label>
                      <input type="text" name="current-log-email" id="current-log-email" />
                    </Box>
                    <Box className="form-group col-md-6">
                      <label for="current-log-email">Last Name*</label>
                      <input type="text" name="current-log-email" id="current-log-email" />
                    </Box>
                    <Box className="form-group col-md-6">
                      <label for="current-log-email">Phone Number</label>
                      <input type="email" name="current-log-email" id="current-log-email" />
                    </Box>
                    <Box className="form-group col-md-6">
                      <label for="current-log-email">Enter Email</label>
                      <input type="email" name="current-log-email" id="current-log-email" />
                    </Box>
                    <Box className="form-group col-md-6">
                      <label for="current-log-password">Enter your City*</label>
                      <input type="text" id="current-log-password" placeholder="Enter your City " />
                      <span className="password-show">
                        <i className="icon-76"></i>
                      </span>
                    </Box>
                    <Box className="form-group col-md-6">
                      <label for="current-log-password">Enter Your State*</label>
                      <input type="text" id="current-log-password" />
                      <span className="password-show">
                        <i className="icon-76"></i>
                      </span>
                    </Box>
                    <Box className="form-group col-md-6">
                      <label for="current-log-password">Applying for ( Area of interest ) *</label>
                      <input type="text" id="current-log-password" />
                      <span className="password-show">
                        <i className="icon-76"></i>
                      </span>
                    </Box>
                    <Box className="form-group col-md-6">
                      <label for="current-log-password">Attach your Resume Here* *</label>
                      <Box style={{ borderWidth: 1, display: "flex", justifyContent: "end", height: "50px", alignItems: "center", paddingRight: "2%" }}>
                        <Input
                          type="file"
                          display="none"
                          // onChange={handleFileUpload}
                        />

                        <FaCloudUploadAlt fontSize={40} name="attachment" onClick={() => document.querySelector('input[type="file"]').click()} cursor="pointer" />
                      </Box>
                    </Box>

                    <Box className="form-group">
                      <button type="button" className="edu-btn btn-medium">
                        Submit <i className="icon-4"></i>
                      </button>
                    </Box>
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Carrers;
