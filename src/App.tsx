import { ThemeProvider } from "@mui/system";
import { defaultTheme } from "./styles/theme/defaultTheme";
import "./index.css";
import { Home } from "./pages/Home";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
