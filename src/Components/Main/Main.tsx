import { ResumeDataContextProvider } from "../../Provider/ResumeDataContextProvider";
import ResumeTemplateChooseContextProvider from "../../Provider/ResumeTemplateChooseContextProvider";
import MainFormContainer from "../MainFormContainer/MainFormContainer";

const Main = () => {
  return (
    <ResumeDataContextProvider>
      <ResumeTemplateChooseContextProvider>
        <MainFormContainer />
      </ResumeTemplateChooseContextProvider>
    </ResumeDataContextProvider>
  );
};

export default Main;
