import React from "react";

const StoreСontext = React.createContext(null);

export const Provider = (props) => {
  return <StoreСontext.Provider value={props.store}>
      {props.children}
  </StoreСontext.Provider>;
};

export default StoreСontext;
