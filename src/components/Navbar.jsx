import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/logo.svg";
import LanguageIcon from "@mui/icons-material/Language";
import AppButton from "./AppButton";

const navbarLinks = [
  "What can you do",
  " / ",
  "How it Works",
  " / ",
  "Who we are",
];

const Navbar = () => {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: "1",
        boxShadow:
          "0px 5px 6px -3px rgba(144, 164, 174, 0.2), 0px 9px 12px 1px rgba(144, 164, 174, 0.14), 0px 3px 16px 2px rgba(144, 164, 174, 0.12)",
        height: "80px",
        display: "grid",
        gridTemplateColumns: "1fr 3fr 1fr",
        alignItems: "center",
        px: "40px",
      }}
    >
      <img src={logo} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {navbarLinks.map((navbarLink, index) => (
          <Typography key={index} variant="subtitle2">
            {navbarLink}
          </Typography>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifySelf: "end",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <LanguageIcon />

        <AppButton>Login</AppButton>
      </Box>
    </Box>
  );
};

export default Navbar;
