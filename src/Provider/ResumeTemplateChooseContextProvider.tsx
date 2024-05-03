import React from "react";

export const ResumeTemplateContext = React.createContext<{
  activeTemplate: string;
  setActiveTemplate: Function;
}>({
  activeTemplate: "",
  setActiveTemplate: () => {},
});
const ResumeTemplateChooseContextProvider = ({ children }: any) => {
  const [activeTemplate, setActiveTemplate] = React.useState("Template1");
  const val = {
    activeTemplate,
    setActiveTemplate,
  };

  return (
    <ResumeTemplateContext.Provider value={val}>
      {children}
    </ResumeTemplateContext.Provider>
  );
};

export default ResumeTemplateChooseContextProvider;
