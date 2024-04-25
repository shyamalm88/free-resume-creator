import React from "react";
import { ResumeStageContext } from "../Provider/ResumeStageContextProvider";

const useResumeStageContextProvider = () => {
  const contextValue = React.useContext(ResumeStageContext);
  return contextValue;
};

export default useResumeStageContextProvider;
