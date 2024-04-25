import {
  Box,
  Drawer,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import useResumeStageContextProvider from "../../hooks/useResumeStageContextProvider";

const steps = [
  {
    label: "Personal Info",
    description: `What’s the best way for employers to contact you?`,
  },
  {
    label: "Professional Experience",
    description:
      "Highlighting the significance of professional experience on a resume is crucial as it illustrates your practical application of skills and expertise in real-world scenarios, demonstrating your capability to contribute effectively in a professional setting.",
  },
  {
    label: "Technical Skills",
    description: `Stressing the importance of technical skills on a resume is vital as it demonstrates your proficiency in relevant tools and technologies, making you a valuable candidate for positions that require specific expertise.`,
  },
  {
    label: "Projects",
    description: `Underscoring the significance of projects on a resume is paramount as it showcases your practical application of skills and accomplishments, providing recruiters with tangible evidence of your abilities.`,
  },
  {
    label: "Education",
    description: `Emphasizing the significance of education on a resume is essential, as it offers recruiters valuable insights into your qualifications and background.`,
  },
  {
    label: "Certifications",
    description: `certifications can enhance your resume by showcasing your skills, competitiveness, industry alignment, and commitment to ongoing learning and development.`,
  },
  {
    label: "Language Known",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Summary",
    description: "Your summary shows employers you’re right for their job.",
  },
];
const LeftDrawer = ({ drawerWidth }: any) => {
  const { activeStep, setNextButtonText, setOptionalButtonText } =
    useResumeStageContextProvider();
  console.log(activeStep);

  React.useEffect(() => {
    setNextButtonText(steps[activeStep + 1].label);
    if (activeStep === 0) {
      setOptionalButtonText("Personal Details");
    } else {
      setOptionalButtonText("");
    }
  }, [activeStep]);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "#07142b",
          color: "#fff",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Box sx={{ maxWidth: drawerWidth, px: 2 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel sx={{ color: "#fff" }}>
                <span style={{ color: "#fff" }}>{step.label}</span>
              </StepLabel>
              <StepContent TransitionProps={{ unmountOnExit: false }}>
                <Typography>{step.description}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Drawer>
  );
};

export default LeftDrawer;
