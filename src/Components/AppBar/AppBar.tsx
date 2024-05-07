import { ArrowBackIosNew } from "@mui/icons-material";
import { AppBar, Button, IconButton, Toolbar, useTheme } from "@mui/material";
import React from "react";
import useResumeStageContextProvider from "../../hooks/useResumeStageContextProvider";
import MenuIcon from "@mui/icons-material/Menu";
import useAppMenuContextProvider from "../../hooks/useAppMenuContextProvider";
import { isMobile } from "react-device-detect";

const AppBarNav = ({ drawerWidth }: any) => {
  const { handleBack, activeStep } = useResumeStageContextProvider();
  const { displayAppMenu, setDisplayAppMenu } = useAppMenuContextProvider();
  const handlePrevPage = () => {
    handleBack();
  };

  const handleDisplayAppMenu = () => {
    setDisplayAppMenu(!displayAppMenu);
  };

  return (
    <AppBar
      position="fixed"
      elevation={4}
      sx={{
        width: !displayAppMenu ? `100%` : `calc(100% - ${drawerWidth}px)`,
        ml: !displayAppMenu ? `0px` : `${drawerWidth}px`,
        backgroundColor: "white",
        color: "#333",
      }}
    >
      <Toolbar variant="dense">
        {isMobile && (
          <IconButton onClick={handleDisplayAppMenu}>
            <MenuIcon />
          </IconButton>
        )}
        {activeStep !== 0 && (
          <Button
            aria-label="text"
            variant="text"
            size="small"
            startIcon={<ArrowBackIosNew />}
            onClick={handlePrevPage}
          >
            Go Back
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AppBarNav;
