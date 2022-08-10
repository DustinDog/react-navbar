import { Box, Typography } from "@mui/material";
import welcome from "../../assets/welcome.svg";
import title from "../../assets/title.svg";
import AppButton from "../../components/AppButton";

const gradient =
  "radial-gradient(ellipse at top, rgba(70, 179, 176, 0.4), transparent 50%)";

const GetStarted = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${welcome}), ${gradient}`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "570px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "50px",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "750px",
        }}
      >
        <img src={title}></img>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          An educational platform that offers professional courses in It is a
          long established fact that a reader will be distracted by the readable
          content of
        </Typography>
        <AppButton size="large">Get started for free</AppButton>
      </Box>
    </Box>
  );
};

export default GetStarted;
