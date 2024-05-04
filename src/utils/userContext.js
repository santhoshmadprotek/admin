import { createContext, useState } from "react";

export const LoginData = createContext();

const UserContext = ({ children }) => {
    const [accessToken, setAccessToken] = useState("");
  return <LoginData.Provider value={{accessToken,setAccessToken}}>{children}</LoginData.Provider>;
};

export default UserContext;
