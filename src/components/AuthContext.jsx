import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("username");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (username) => {
    sessionStorage.setItem("username", username);
    setUser(username);
  };

  const logout = () => {
    sessionStorage.removeItem("username");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
