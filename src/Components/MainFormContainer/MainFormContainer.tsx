import React from "react";
import { Box, Container, Toolbar } from "@mui/material";
import ActionButtons from "../ActionButtons/ActionButtons";
import { SwitchResumeComponent } from "../SwitchResumeComponentes/SwitchResumeComponent";
import useResumeStageContextProvider from "../../hooks/useResumeStageContextProvider";
import useResumeDataContextProvider from "../../hooks/useResumeDataContextProvider";

import { useForm, FormProvider } from "react-hook-form";
import { isMobile } from "react-device-detect";

const MainFormContainer = () => {
  const { activeStep } = useResumeStageContextProvider();
  const { resumeData, setResumeData } = useResumeDataContextProvider();
  const methods = useForm({ mode: "onBlur" });
  const onSubmit = (data: any) => {
    setResumeData(data);
  };

  const onChange = (e: any) => {
    console.log(e.target.name);
    setResumeData((prevData: any) => {
      if (e.target.name.includes(".")) {
        const splitedKey = e.target.name.split(".");
        const key = splitedKey[0];
        console.log(methods.getValues(`${key}.${splitedKey[1]}`));
        return {
          ...prevData,
          [key]: prevData[key].map((item: any, i: number) => {
            if (i == splitedKey[1]) {
              return {
                ...item,
                [splitedKey[2]]: methods.getValues(e.target.name),
              };
            } else {
              return item;
            }
          }),
        };
      }
      return {
        ...prevData,
        [e.target.name]: methods.getValues(e.target.name),
      };
    });
    console.log(resumeData);
  };
  return (
    <FormProvider {...methods}>
      <Container disableGutters={isMobile}>
        <form onSubmit={methods.handleSubmit(onSubmit)} onChange={onChange}>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              p: isMobile ? 1 : 3,
            }}
          >
            <Toolbar />

            <SwitchResumeComponent activeStep={activeStep} />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              p: isMobile ? 1 : 3,
            }}
          >
            <ActionButtons />
          </Box>
          <input type="submit" id="submit" style={{ visibility: "visible" }} />
        </form>
      </Container>
    </FormProvider>
  );
};

export default MainFormContainer;
