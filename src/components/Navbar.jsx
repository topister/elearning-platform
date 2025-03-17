import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Nav>
        <Nav.Link as={NavLink} to="/dashboard">
          Dashboard
        </Nav.Link>{" "}
        {/* ✅ Correct way */}
      </Nav>
    </Navbar>
  );
}

export default NavBar;
