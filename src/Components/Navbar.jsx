
import { useContext } from "react";
import { AuthContext } from "../Context/globalstore";

export default function Navbar() {
  const { username, logout } = useContext(AuthContext);

  return (
    <nav>
      <h2>My Website</h2>

      {username ? (
        <div>
          Welcome, {username}!
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please Login</p>
      )}
    </nav>
  );
}
