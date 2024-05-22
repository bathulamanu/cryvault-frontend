import React from "react";
import ReachUs from "../Components/Common/ReachUs";
import TableContents from "../Components/Common/TableContents";
import { Link, Box, Breadcrumbs, Typography } from "@mui/material";
import useDeviceSize from "../Utilities/useDeviceSize";

const SevenReasonscordblood = () => {
  const isMobile = useDeviceSize() === "xs";

  return (
    <>
      <Box  sx={{ padding: isMobile ? " 50px 7px !important" : "120px 0px !important" }} className="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19">
        <Box className="container">
          <Box className="breadcrumb-inner">
            <Box className="page-title d-flex align-items-center">
              <Box className="w-100">
                <Typography variant="h1" className="title">
                  7 Reasons to Save your Childs Cord Blood
                </Typography>
                {isMobile ? null : (
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                      <Typography variant="body2" color="text.primary">
                        Stem Cell Banking
                      </Typography>
                    </Link>
                    <Typography variant="body2" color="text.primary">
                      7 Reasons to Save your Childs Cord Blood
                    </Typography>
                  </Breadcrumbs>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="edu-section-gap course-details-area">
        <Box className="container">
          <Box className="row row--30">
            <Box className="col-lg-8">
              <Box className="course-details-content course-details-2">
                <Box className="course-overview">
                  <Typography variant="h4">Protect your family's future health :</Typography>
                  <Typography>Umbilical cord blood is being used in the treatment and, in some cases, cure, for many cancers, immune and genetic diseases, injuries and other illnesses. Families who have a history of certain genetic diseases are especially encouraged to bank their baby’s cord blood due to its potential use in siblings or parents. More and more families choose to bank their child’s umbilical cord blood for peace of mind for their family’s future. Cryovault offers many options to families in saving these precious resources. By banking your child’s blood you have the opportunity to preserve these potentially lifesaving cells.</Typography>
                  <Typography variant="h4">Many diseases can be cured or treated with cord blood stem cells now :</Typography>
                  <Typography>Cord blood stem cells are used in the treatment or cure of more than 80 diseases. Doctors are able to use it to treat many cancers and other malignant diseases such as leukemia, lymphoma.</Typography>
                  <Typography>Researchers are breaking new ground in stem cells applications which could prove beneficial in the future for the treatment of many more common diseases and medical afflictions such as spinal cord injuries, diabetes, stroke, Parkinson’s disease and Alzheimer’s.</Typography>
                  <Typography variant="h4">Cord blood stem cells will always be a perfect match for your baby and your family :</Typography>
                  <Typography>To be a match for any kind of stem cell transplant you must be a “match” to the donor cells. For a transplant coming from a bone marrow donor, a perfect 6 out 6 Human Leukocyte Antigen (HLA) tissue type match is required. For cord blood stem cells, only a 4 of 6 HLA match is necessary. Your baby will always be a perfect match to his or her cord blood should the need ever arise for a stem cell transplant. But did you know that for a full sibling and parents they will also be a highquality match? And cord blood stem cells are also a “half match,” or 3 of 6, for each Grand parent</Typography>
                  <Typography variant="h4">Stem cell research is revealing exciting future uses :</Typography>
                  <Typography>With this research, the importance in saving your baby’s cord blood is greater than ever before. By choosing a private cord blood bank like Cryovault, you can store your child’s cord blood indefinitely and provide him or her a guaranteed exact genetic stem cell match as protection for treatment possibilities in the future. looking at the use of stem cells in the treatments of spinal cord injuries, stroke, Alzheimer’s disease, heart disease, and some Immune disorders, diabetes, and many more illnesses, injuries and diseases.</Typography>
                  <Typography variant="h4">Cord blood stem cells have potential sibling use :</Typography>
                  <Typography>Your children have an increased likelihood of requiring a stem cell transplant sometime in their life if your family has a medical history of any of the diseases that can be treated with cord blood. Thanks to the research and new discoveries from laboratories like Cryovault, the list of treatable diseases continues to grow all the time. Choosing to bank the cord blood and tissue from all pregnancies is highly encouraged. The reason being that a sibling transplant may be superior for treatment of certain genetic diseases as opposed to one from the child’s own cells.</Typography>
                  <Typography variant="h4">Cord blood is valuable for your family's medical future :</Typography>
                  <Typography>The stem cells in your baby’s cord blood have the ability to heal, repair or regrow damaged or diseased cells for your child or family members. The potential for their use today is remarkable with stem cells being used in the treatment of more than 80 diseases currently, and their future potential, as well as that from cord Blood stem cells, is promising with new therapies and discoveries made every day. The large amounts and diversity of stem cells in cord blood and tissue and its future possibilities, make us at Cryovault believe that collecting the cord blood and tissue is an intelligent and worthwhile choice for your family.</Typography>
                  <Typography variant="h4">There's no reason NOT to bank your child's cord blood :</Typography>
                  <Typography>Whether it’s to protect your family’s future medical health, to treat a sibling with a current ongoing condition, or just for peace of mind, there is essentially no reason not to bank your baby’s umbilical cord blood. The scores of diseases currently being treated, coupled with the promising future potential being discovered every day, make the value in saving your baby’s cord blood even more important today. Banking your child’s cord blood is an investment in your family’s future.</Typography>
                </Box>
              </Box>
            </Box>
            <Box className="col-lg-4">
              <Box className="course-sidebar-3 sidebar-top-position">
                <TableContents />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <ReachUs />
    </>
  );
};

export default SevenReasonscordblood;
