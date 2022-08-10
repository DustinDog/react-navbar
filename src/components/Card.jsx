import { Box, Typography } from "@mui/material";
import React from "react";
import AppButton from "../components/AppButton";

const Card = ({ img, title, description, btnText }) => {
  return (
    <Box
      sx={{
        borderRadius: "6px",
        bgcolor: "white",
        textAlign: "center",
        maxWidth: "440px",
        boxShadow:
          "0px 5px 6px -3px rgba(144, 164, 174, 0.2), 0px 9px 12px 1px rgba(144, 164, 174, 0.14), 0px 3px 16px 2px rgba(144, 164, 174, 0.12)",
        pb: "32px",
      }}
    >
      <img src={img} />
      <Typography variant="h5" sx={{ mb: "16px" }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mb: "24px" }}>
        {description}
      </Typography>
      <AppButton>{btnText}</AppButton>
    </Box>
  );
};

export default Card;
