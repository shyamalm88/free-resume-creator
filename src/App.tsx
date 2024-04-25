import { Box, CssBaseline } from "@mui/material";
import "./App.css";
import AppBarNav from "./Components/AppBar/AppBar";
import LeftDrawer from "./Components/LeftDrawer/LeftDrawer";
import Main from "./Components/Main/Main";
import ResumeStageContextProvider from "./Provider/ResumeStageContextProvider";
const drawerWidth = 340;
function App() {
  return (
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
  );
}

export default App;
