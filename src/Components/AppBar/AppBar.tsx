import { ArrowBackIosNew } from "@mui/icons-material";
import { AppBar, Button, Toolbar } from "@mui/material";
import React from "react";
import useResumeStageContextProvider from "../../hooks/useResumeStageContextProvider";

const AppBarNav = ({ drawerWidth }: any) => {
  const { handleBack, activeStep } = useResumeStageContextProvider();
  const handlePrevPage = () => {
    handleBack();
  };
  return (
    <AppBar
      position="fixed"
      elevation={4}
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        backgroundColor: "white",
        color: "#333",
      }}
    >
      <Toolbar variant="dense">
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
