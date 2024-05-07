import { Box, CssBaseline } from "@mui/material";
import "./App.css";
import AppBarNav from "./Components/AppBar/AppBar";
import LeftDrawer from "./Components/LeftDrawer/LeftDrawer";
import Main from "./Components/Main/Main";
import ResumeStageContextProvider from "./Provider/ResumeStageContextProvider";
import { AppMenuContextProvider } from "./Provider/AppMenuContextProvider";
const drawerWidth = 340;
function App() {
  return (
    <AppMenuContextProvider>
      <ResumeStageContextProvider>
        <div className="App">
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBarNav drawerWidth={drawerWidth} />
            <LeftDrawer drawerWidth={drawerWidth} />
            <Main />
          </Box>
        </div>
      </ResumeStageContextProvider>
    </AppMenuContextProvider>
  );
}

export default App;
