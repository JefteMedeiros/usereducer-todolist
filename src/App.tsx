import { ThemeProvider } from "@mui/system";
import { defaultTheme } from "./styles/theme/defaultTheme";
import "./index.css";
import { Home } from "./pages/Home";
import { TaskProvider } from "./contexts";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TaskProvider>
        <Home />
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
