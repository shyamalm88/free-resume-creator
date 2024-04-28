import { ResumeDataContextProvider } from "../../Provider/ResumeDataContextProvider";
import MainFormContainer from "../MainFormContainer/MainFormContainer";

const Main = () => {
  return (
    <ResumeDataContextProvider>
      <MainFormContainer />
    </ResumeDataContextProvider>
  );
};

export default Main;
