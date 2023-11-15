// import Container from 'react-bootstrap/Container';
// import { Link } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { useNavigate } from 'react-router-dom';
// import useIsLoggedIn from '../../hooks/useIsLoggedIn';

// const NavBar: React.FC = () => {
//   // Utils
//   const navigate = useNavigate();
//   const isLoggedIn: boolean = useIsLoggedIn();

//   // Handlers
//   function onLogOut() {
//     window.localStorage.removeItem('isLoggedIn');
//     navigate('/');
//   }

//   // Render
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand as={Link} to="/">EL BUEN SABOR</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
            
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <Nav.Link as={Link} to="/components">Components</Nav.Link>
//             <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
//             {isLoggedIn && <Nav.Link onClick={onLogOut}>Log Out</Nav.Link>}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// };

// export default NavBar;
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import useIsLoggedIn from '../../hooks/useIsLoggedIn';

const NavBar: React.FC = () => {
  // Utils
  const navigate = useNavigate();
  const isLoggedIn: boolean = useIsLoggedIn();

  // Handlers
  function onLogOut() {
    window.localStorage.removeItem('isLoggedIn');
    navigate('/');
  }

  // Render
  return (
    <Navbar expand="lg" bg="dark" variant="dark"> {/* Cambiar el color, por ejemplo, a dark */}
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://raw.githubusercontent.com/Zackgd/10Peso/dc50ea0fc67d0a106b1dd56267827eb0b88d5d32/logonombre.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          EL BUEN SABOR
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/components">Components</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
            {isLoggedIn && <Nav.Link onClick={onLogOut}>Log Out</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;