import React from "react";
import { templateSampleData } from "../data/templateSampleData";

export const ResumeDataContext = React.createContext<any>(null);

export const ResumeDataContextProvider = ({ children }: any) => {
  const [resumeData, setResumeData] = React.useState(templateSampleData);
  return (
    <ResumeDataContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeDataContext.Provider>
  );
};
