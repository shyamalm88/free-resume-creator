import React from "react";
import { templateSampleData } from "../data/templateSampleData";

export const ResumeDataContext = React.createContext<{
  resumeData: any;
  setResumeData: Function;
}>({
  resumeData: {},
  setResumeData: () => {},
});

export const ResumeDataContextProvider = ({ children }: any) => {
  const [resumeData, setResumeData] = React.useState(templateSampleData);
  React.useEffect(() => {
    console.log("resumeData", resumeData);
  }, [resumeData]);
  return (
    <ResumeDataContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeDataContext.Provider>
  );
};
