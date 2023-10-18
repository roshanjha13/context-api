import React, { useState } from "react";

import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(0);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

/* provider give us a props name value and in the value
  we pass as many data send in this value */
