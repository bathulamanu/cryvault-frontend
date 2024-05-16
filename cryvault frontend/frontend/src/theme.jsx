import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
          position: "absolute",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            border: "none",
          },
          border: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "none",
            transform: "none",
            transition: "none",
          },
        },
        actionArea: {
          "&.MuiCardActionArea-focusHighlight": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          "&:hover": {
            // Reset hover styles
            boxShadow: "none",
            transform: "none",
            transition: "none",
          },
          "&.Mui-focusVisible $focusHighlight": {
            // Target focus highlight
            backgroundColor: "transparent",
          },
        },
        focusHighlight: {
          // Style the focus highlight element itself
          backgroundColor: "transparent",
        },
      },
    },
  },
});

export default theme;
