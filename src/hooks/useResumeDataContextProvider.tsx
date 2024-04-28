import React from "react";
import { ResumeDataContext } from "../Provider/ResumeDataContextProvider";

const useResumeDataContextProvider = () => {
  const contextValue = React.useContext(ResumeDataContext);
  return contextValue;
};

export default useResumeDataContextProvider;
