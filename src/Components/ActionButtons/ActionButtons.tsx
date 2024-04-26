import { Box, Button, Stack } from "@mui/material";
import React from "react";
import useResumeStageContextProvider from "../../hooks/useResumeStageContextProvider";
import DemographicAndVisaStatus from "../DemographicAndVisaStatus/DemographicAndVisaStatus";

const ActionButtons = () => {
  const [open, setOpen] = React.useState(false);
  const { handleNext, nextButtonText, optionalButtonText } =
    useResumeStageContextProvider();
  const handleNextPage = () => {
    handleNext();
  };

  const handleSubmit = () => {
    document.getElementById("submit")?.click();
  };

  return (
    <>
      <Box sx={{ p: 2 }}>
        <Stack spacing={2} direction="row" justifyContent="space-between">
          {optionalButtonText ? (
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpen(true)}
              className="customActionBtn personal"
            >
              Optional: {optionalButtonText}
            </Button>
          ) : (
            <span></span>
          )}
          <Stack spacing={2} direction="row">
            <Button
              variant="outlined"
              color="warning"
              className="customActionBtn"
            >
              Preview
            </Button>
            {nextButtonText ? (
              <Button
                variant="outlined"
                color="success"
                onClick={handleNextPage}
                className="customActionBtn next"
              >
                Next: {nextButtonText}
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="success"
                onClick={handleSubmit}
                className="customActionBtn next"
              >
                Submit
              </Button>
            )}
          </Stack>
        </Stack>
      </Box>
      <DemographicAndVisaStatus open={open} setOpen={setOpen} />
    </>
  );
};

export default ActionButtons;
