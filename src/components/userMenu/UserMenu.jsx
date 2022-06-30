import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/Auth-selectors';
import authOperations from '../../redux/auth/Auth-operations';
import { Navbar, Button } from 'react-bootstrap';


export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className='me-3'>Welcome, {name}!</Navbar.Text>     
      <Button variant="light" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </Button>
    </Navbar.Collapse>
  );
}