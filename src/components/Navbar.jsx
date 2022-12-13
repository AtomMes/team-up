import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const navigationButtons = [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "Community",
      to: "/",
    },
    {
      text: "Games",
      to: "/",
    },
    {
      text: "Quizz",
      to: "/",
    },
  ];

  return (
    <Box
      maxWidth="1130px"
      width="100%"
      margin="20px auto"
      bgcolor="transparent"
    >
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <Button
            variant="outlined"
            sx={{
              fontWeight: "600",
              fontSize: "20px",
              color: "white",
              backgroundColor: "#ea552b",
              width: "150px",
              minHeight: "60px",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
              whiteSpace: "nowrap",
              marginRight: "20px",
              border: "transparent",
              "&:hover": {
                border: "transparent",
                backgroundColor: "#e34114",
              },
            }}
          >
            Logo
          </Button>
          <Box display="flex" gap="30px">
            {navigationButtons.map((nav, i) => (
              <Button
                className="navigationButton"
                sx={{

                  color: "#181818",
                  textTransform: "capitalize",
                  lineHeight: "40px",
                  padding: "0 15px",
                  fontSize: "20px",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                {nav.text}
              </Button>
            ))}
          </Box>
        </Box>
        <Box display="flex" sx={{ minHeight: "60px" }} alignItems="center">
          <Button
            sx={{
              color: "#181818",
              textTransform: "capitalize",
              fontSize: "16px",
              marginRight: "30px",
              fontWeight: "500",
            }}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            sx={{
              fontSize: "16px",
              textTransform: "capitalize",
              color: "white",
              backgroundColor: "#181818",
              width: "150px",
              minHeight: "60px",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
              whiteSpace: "nowrap",
              marginRight: "20px",
              border: "transparent",
              "&:hover": {
                border: "transparent",
                backgroundColor: "#e34114",
              },
            }}
          >
            Try for free
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
