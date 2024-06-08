import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useDeviceSize from "../../Utilities/useDeviceSize";
import "./Blog.css";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../redux/reducers/HomePageReducer";
import dayjs from "dayjs";

const Blogs = () => {
  const isMobile = useDeviceSize() === "xs";
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.home.blogs);
  const isMultipleBlog = blogs?.length > 1;
  console.log(blogs);
  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  const formattedDate = (timestamp) => dayjs(timestamp).format("DD/MM/YYYY");
  return (
    <Box sx={{ display: "grid", margin: "2rem", gridTemplateColumns: isMobile ? "auto" : "auto auto auto", columnGap: "1rem", rowGap: "1rem" }}>
      {blogs?.map((blog) => (
        <Link to="#">
          <Box className={isMobile ? "blogCardContainerMobile edu-blog blog-style-list sal-animate" : "edu-blog blog-style-list sal-animate"}>
            <Box className={isMobile ? "inner blogCardMobile " : "inner"} sx={{ flexDirection: "column", maxWidth: isMobile ? "100%" : isMultipleBlog ? "100%" : "33%" }}>
              <Box className="thumbnail">
              <Link to={`/blog-single/${blog?.blogID}`}>
                <img style={{ width: "100% !important", height: isMobile ? "100%" : "236px !important" }} src={`https://flyingbyts.s3.ap-south-2.amazonaws.com/${blog?.featureImage}`} alt="Blog Images" />
                </Link>
              </Box>
              <Box sx={{ margin: "2rem" }} className="content">
                <Typography sx={{ fontSize: "2rem", fontWeight: "500" }} variant="h5" className="title">
                  {blog?.metaKeywords}
                </Typography>
                <Typography sx={{ fontSize: "1.75rem" }} variant="body1">
                  {formattedDate(blog?.createdTime)}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default Blogs;
