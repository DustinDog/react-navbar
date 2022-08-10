import { Box } from "@mui/material";
import AdvantagesCarousel from "../../containers/AdvantagesCarousel";
import GetStarted from "../../containers/get-started/GetStarted";
import StartLearning from "../../containers/StartLearning";

const HomePage = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        display: "grid",
        justifyContent: "center",
      }}
    >
      <GetStarted />
      <Box sx={{ maxWidth: "1128px", display: "grid", gap: "80px" }}>
        <AdvantagesCarousel />
        <StartLearning />
      </Box>
    </Box>
  );
};

export default HomePage;
