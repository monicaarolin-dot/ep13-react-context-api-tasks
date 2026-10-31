
import { useContext } from "react";
import { AuthContext } from "../Context/globalstore";

export default function Profile() {
  const { username } = useContext(AuthContext);

  console.log("Profile Username:", username);

  return (
    <div>
      <h2>User Profile</h2>

      {username ? (
        <p>Username: {username}</p>
      ) : (
        <p>Please login to view your profile.</p>
      )}
    </div>
  );
}
