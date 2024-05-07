import React from "react";
import { isMobile } from "react-device-detect";

export const AppMenuContext = React.createContext<{
  displayAppMenu: boolean;
  setDisplayAppMenu: Function;
}>({
  displayAppMenu: false,
  setDisplayAppMenu: () => {},
});

export const AppMenuContextProvider = ({ children }: any) => {
  const [displayAppMenu, setDisplayAppMenu] = React.useState(
    isMobile ? false : true
  );

  return (
    <AppMenuContext.Provider value={{ displayAppMenu, setDisplayAppMenu }}>
      {children}
    </AppMenuContext.Provider>
  );
};
