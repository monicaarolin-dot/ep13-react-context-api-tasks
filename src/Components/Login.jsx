
import { useState, useContext } from "react";
import { AuthContext } from "../Context/globalstore";

export default function Login() {
  const [name, setName] = useState("");

  const { login } = useContext(AuthContext);

  function handleLogin(e) {
    e.preventDefault();

    if (name.trim() !== "") {
      login(name);
      setName("");
    }
  }

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
