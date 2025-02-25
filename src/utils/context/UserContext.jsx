import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({
  loggedInUser: "Default User",
});

export const UserProvider = ({ children }) => {
  const [loggedBodyUser, setLoggedBodyUser] = useState("");
  useEffect(() => {
    const loggedBodyUser = "Saugata Roy";
    setLoggedBodyUser(loggedBodyUser);
  }, []);

  return (
    <UserContext.Provider
      value={{ loggedInUser: loggedBodyUser, setLoggedBodyUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
