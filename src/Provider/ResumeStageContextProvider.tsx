import React from "react";
export const ResumeStageContext = React.createContext<{
  activeStep: number;
  nextButtonText: string;
  optionalButtonText: string;
  setNextButtonText: Function;
  setOptionalButtonText: Function;
  setActiveStep: Function;
  handleNext: Function;
  handleBack: Function;
  handleReset: Function;
}>({
  activeStep: 0,
  nextButtonText: "",
  optionalButtonText: "",
  setOptionalButtonText: () => {},
  setNextButtonText: () => {},
  setActiveStep: () => {},
  handleNext: () => {},
  handleBack: () => {},
  handleReset: () => {},
});

const ResumeStageContextProvider = ({ children }: any) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [nextButtonText, setNextButtonText] = React.useState("");
  const [optionalButtonText, setOptionalButtonText] = React.useState("");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <ResumeStageContext.Provider
      value={{
        activeStep,
        nextButtonText,
        optionalButtonText,
        setOptionalButtonText,
        setNextButtonText,
        setActiveStep,
        handleNext,
        handleBack,
        handleReset,
      }}
    >
      {children}
    </ResumeStageContext.Provider>
  );
};

export default ResumeStageContextProvider;
