import { createTheme } from "@mui/material";
import button from "./app.button";
import palette from "./app.palette";
import appTypography from "./app.typography";

export const theme = createTheme({
  palette,
  typography: appTypography,
  components: { MuiButton: button },
});
