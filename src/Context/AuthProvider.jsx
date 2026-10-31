
import { useState } from "react";
import { AuthContext } from "./globalstore";

export default function AuthProvider({ children }) {
  const [username, setUsername] = useState("");

  function login(name) {
    setUsername(name);
  }

  function logout() {
    setUsername("");
  }

  return (
    <AuthContext.Provider value={{ username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
