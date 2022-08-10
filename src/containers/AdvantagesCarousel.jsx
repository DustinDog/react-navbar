import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Map from "../assets/map.svg";
import Diploma from "../assets/diploma.jpg";

const info = [
  {
    title: "Flexible location",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: Map,
  },
  {
    title: "Individual Time",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: Diploma,
  },
  {
    title: "Free Choice of Teachers",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: Diploma,
  },
  {
    title: "Digital Communication",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: Diploma,
  },
];

const AdvantagesCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedImg = info.filter((value, index) => selectedIndex === index)[0]
    .img;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {" "}
        <img src={selectedImg} />
      </Box>

      <Box>
        {info.map((value, index) => {
          const isActive = selectedIndex === index;
          return (
            <Box
              onClick={() => setSelectedIndex(index)}
              key={index}
              sx={{
                borderRadius: "6px",
                bgcolor: isActive && "primary.800",
                color: isActive && "white",
                transition: "0.7s",
                cursor: "pointer",
                p: "16px",
                "&:not(:last-child)": { mb: "16px" },
              }}
            >
              <Typography variant="h6">{value.title}</Typography>
              {isActive && (
                <Typography variant="body2" sx={{ mt: "16px" }}>
                  {value.content}
                </Typography>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default AdvantagesCarousel;
