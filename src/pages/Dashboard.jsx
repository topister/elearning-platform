import { Container } from "react-bootstrap";
import useAuthStore from "../store/useAuthStore";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const { user } = useAuthStore();

  if (!user) return <Navigate to="/" />;

  return (
    <Container className="mt-5">
      <h1>Dashboard</h1>
      <p>Welcome, {user.name}!</p>
    </Container>
  );
}

export default Dashboard;
