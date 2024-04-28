import { Box, Container, Toolbar } from "@mui/material";
import React from "react";
import ActionButtons from "../ActionButtons/ActionButtons";
import { SwitchResumeComponent } from "../SwitchResumeComponentes/SwitchResumeComponent";
import useResumeStageContextProvider from "../../hooks/useResumeStageContextProvider";
import { useForm, FormProvider } from "react-hook-form";
import { ResumeDataContextProvider } from "../../Provider/ResumeDataContextProvider";
const defaultValues = {
  firstName: null,
  lastName: null,
  middleName: null,
  profession: null,
  city: null,
  country: null,
  pinCode: null,
  mobileNo: null,
  email: null,
  linkedin: null,
  github: null,
  personalWebSite: null,
  softSkills: null,
  technicalSkills: null,
  experience: [
    {
      jobTitle: null,
      company: null,
      startMonth: null,
      startYear: null,
      endMonth: null,
      endYear: null,
    },
  ],
};
const Main = () => {
  const { activeStep } = useResumeStageContextProvider();
  const methods = useForm({mode: "onChange"});
  const onSubmit = (data: any) => {
    console.log(data);
    localStorage.setItem("resumeData", JSON.stringify(data));
  };

  
  const onChange = () => {
      localStorage.setItem("resumeData", JSON.stringify(methods.getValues()));
  };
  return (
    <FormProvider {...methods}>
      <ResumeDataContextProvider>
      <Container>
        <form onSubmit={methods.handleSubmit(onSubmit)} onChange={onChange}>
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
          >
            <Toolbar />

            <SwitchResumeComponent activeStep={activeStep} />
          </Box>
          <Box sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
            <ActionButtons />
          </Box>
          <input type="submit" id="submit" style={{ visibility: "visible" }} />
        </form>
      </Container>
      </ResumeDataContextProvider>
    </FormProvider>
  );
};

export default Main;
