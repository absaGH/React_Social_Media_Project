import { createContext, useEffect, useState } from "react";
import profileIm from "/home/yosef/Desktop/react folders/React_Social_Media_Project/src/pages/images/image3.jpg";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({id:1, name:"John Doe", profilePic: profileIm});  
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};