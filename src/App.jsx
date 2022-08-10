import Navbar from "./components/Navbar";

import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/app-theme/custom-mui.styles";
import HomePage from "./pages/home-page/HomePage";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
