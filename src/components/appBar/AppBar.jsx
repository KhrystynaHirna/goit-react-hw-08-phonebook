import { useSelector } from 'react-redux';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';
import AuthNav from '../authNav/AuthNav';
import authSelectors from '../../redux/auth/Auth-selectors';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';


export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="light"
      fixed="top"
    >
      <Container>
          <Nav variant="tabs" defaultActiveKey="/">
            <Navigation />
          </Nav>
          <Nav variant="tabs">{isLoggedIn ? <UserMenu /> : <AuthNav />}</Nav>
      </Container>
    </Navbar>
  );
}