import { List, ListItem, ListItemButton, ListItemText, Box, Link, Typography } from "@mui/material";
import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const courseItems = [
  { text: "Stem Cell Banking", path: "/stem-cell-banking" },
  { text: "Why to Choose Stem Cell Banking?", path: "/why-to-choose-stem-cell-banking" },
  { text: "What is Umbilical Cord?", path: "/about-umbilical-cord" },
  { text: "Cord Blood Banking", path: "/cord-blood-banking-umbilical-cord-preservation-in-india-cryovault" },
  { text: "How to Store Your STEM CELLS WITH CRYOVAULT", path: "/how-to-store-your-stem-cells-with-cryovault" },
  { text: "Benefits of Stem Cells", path: "/best-stem-cell-bank-in-india-stem-cell-banking-cryovault" },
  { text: "When and How is Cord Blood Collected", path: "/when-and-how-is-cord-blood-collected" },
  { text: "7 Reasons to Save your Child's Cord Blood", path: "/7-reasons-to-save-your-childs-cord-blood" },
];

const TableContents = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box className="course-sidebar-3 sidebar-top-position">
        <Box className="edu-course-widget widget-course-summery">
          <Box className="inner">
            <Box className="content">
              <List dense sx={{ padding: 0 }}>
                {courseItems.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton onClick={() => navigate(item.path)}>
                      <ListItemText >
                        <Typography sx={{ fontSize: "2rem !important" }}>{item.text}</Typography>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Box className="read-more-btn down_btn">
                <Typography>Working from home meant we could vary snack and coffee breaks.</Typography>
                <Link href="#" className="edu-btn">
                  Download Kit <IoCloudDownloadOutline />
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TableContents;
