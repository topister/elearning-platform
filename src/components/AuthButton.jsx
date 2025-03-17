import { Button } from "react-bootstrap";
import useAuthStore from "../store/useAuthStore";

function AuthButton() {
  const { user, login, logout } = useAuthStore();

  return (
    <Button onClick={user ? logout : () => login({ name: "John Doe" })}>
      {user ? "Logout" : "Login"}
    </Button>
  );
}

export default AuthButton;
