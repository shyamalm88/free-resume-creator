import React from "react";
import { ResumeTemplateContext } from "../Provider/ResumeTemplateChooseContextProvider";

const useResumeTemplateContextProvider = () => {
  const contextValue = React.useContext(ResumeTemplateContext);
  return contextValue;
};

export default useResumeTemplateContextProvider;
