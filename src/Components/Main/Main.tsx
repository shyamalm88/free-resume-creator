import { Box, Container, Toolbar } from "@mui/material";
import React from "react";
import ActionButtons from "../ActionButtons/ActionButtons";
import { SwitchResumeComponent } from "../SwitchResumeComponentes/SwitchResumeComponent";
import useResumeStageContextProvider from "../../hooks/useResumeStageContextProvider";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
const defaultValues = {
  firstName: "",
  lastName: "",
  middleName: "",
  profession: "",
  city: "",
  country: "",
  pinCode: "",
  mobileNo: "",
  email: "",
  linkedin: "",
  github: "",
  personalWebSite: "",
  softSkills: "",
  technicalSkills: "",
  experience: [
    {
      jobTitle: "",
      company: "",
      startMonth: "",
      startYear: null,
      endMonth: "",
      endYear: null,
    },
  ],
};
const Main = () => {
  const { activeStep } = useResumeStageContextProvider();
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <FormProvider {...methods}>
      <Container>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
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
          <input type="submit" />
        </form>
      </Container>
    </FormProvider>
  );
};

export default Main;