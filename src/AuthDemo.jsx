
import AuthProvider from "./Context/AuthProvider";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";

export default function AuthDemo() {
  return (
    <AuthProvider>
      <Navbar />
      <Login />
      <Profile />
    </AuthProvider>
  );
}
