import { Box, Container, ImageList, ImageListItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";
import useDeviceSize from "../../Utilities/useDeviceSize";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../redux/reducers/HomePageReducer";

const GalleryImagesList = ({ category }) => {
  const isMobile = useDeviceSize() === "xs";
  const dispatch = useDispatch();
  const [imagesSetToshow, setImagesSetToShow] = useState([]);
  const images = useSelector((state) => state.home.images);
  useEffect(() => {
    dispatch(getImages());
  }, []);

  useEffect(() => {
    const normalizedCategory = category.trim().toLowerCase();

    if (normalizedCategory === "all") {
      setImagesSetToShow(images?.["All CryoVault Images"]);
    } else if (normalizedCategory === "mother’s day" || normalizedCategory === "mother's day") {
      setImagesSetToShow(images?.["Mother’s Day"] || images?.["Mother's Day"]);
    } else if (normalizedCategory === "yoga program") {
      setImagesSetToShow(images?.["Yoga Program"]);
    } else if (normalizedCategory === "5k run") {
      setImagesSetToShow(images?.["5k Run"]);
    }
  }, [category, images, setImagesSetToShow]);
  return (
    <Container className="wrapper" sx={{ display: "flex", justifyContent: "center" }}>
      <LightGallery speed={500} plugins={[lgZoom, lgAutoplay, lgRotate, lgShare, lgThumbnail, lgVideo]} selector=".gallery-item">
        <ImageList className="thumbnail" sx={{ width: "100%", height: "100%" }} variant="quilted" cols={4}>
          {imagesSetToshow?.map((item, idx) => (
            <ImageListItem key={idx} cols={Math.floor(Math.random() * 1) + 1 || 1} rows={Math.floor(Math.random() * 3) + 1 || 1} sx={{ margin: "0 !important" }}>
              <Box className="edu-blog gallerImg blog-style-list sal-animate" sx={{ height: "100%", margin: "0 !important" }}>
                <Box className="thumbnail" sx={{ height: "100%", margin: "0 !important" }}>
                  <a className="gallery-item" href={`https://flyingbyts.s3.ap-south-2.amazonaws.com/${item.imageKey}`} data-src={`https://flyingbyts.s3.ap-south-2.amazonaws.com/${item.imageKey}`} style={{ height: "100%" }}>
                    <img src={`https://flyingbyts.s3.ap-south-2.amazonaws.com/${item.imageKey}`} style={{ border: "1px solid #FF003F", borderRadius: "4px", width: "100%", height: "100%" }} alt={item.title} loading="lazy" />
                  </a>
                </Box>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
      </LightGallery>
    </Container>
  );
};

export default GalleryImagesList;
{
  /* <div>{clickedImg && <GalleryModal clickedImg={clickedImg} handelRotationRight={handelRotationRight} setClickedImg={setClickedImg} handelRotationLeft={handelRotationLeft} />}</div> */
}
