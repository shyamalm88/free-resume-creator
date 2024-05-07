import React from "react";
import { AppMenuContext } from "../Provider/AppMenuContextProvider";

const useAppMenuContextProvider = () => {
  const contextValue = React.useContext(AppMenuContext);
  return contextValue;
};

export default useAppMenuContextProvider;
