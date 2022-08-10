import { Box, Typography } from "@mui/material";
import Diploma from "../assets/diploma.jpg";
import Meet from "../assets/meet.jpg";
import Card from "../components/Card";

const cardsInfo = [
  {
    img: Diploma,
    title: "Learn from experts",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    btnText: "Start learning today",
  },
  {
    img: Meet,
    title: "Share your experience",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    btnText: "Become a mentor",
  },
];
const StartLearning = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Typography variant="h2">What can you do</Typography>
      <Typography variant="body1" sx={{ mb: "16px" }}>
        Whether you’re looking for a tutor or to looking become one – you’ve
        come to the right place.
      </Typography>
      <Box
        sx={{
          borderRadius: "20px",
          bgcolor: "grey.200",
          display: "flex",
          justifyContent: "center",
          gap: "32px",
          py: "32px",
        }}
      >
        {cardsInfo.map((value) => (
          <Card
            key={value.title}
            img={value.img}
            title={value.title}
            description={value.description}
            btnText={value.btnText}
          />
        ))}
      </Box>
    </Box>
  );
};

export default StartLearning;
