import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operation';
import { Navbar, Button } from 'react-bootstrap';
import avatar from './avatar.jpg'

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Navbar.Collapse className="justify-content-end"><img className="rounded-circle me-3" src={avatar} alt="avatar" width="35" />
      <Navbar.Text className='me-3'>Welcome, {name}!</Navbar.Text>     
      <Button variant="light" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </Button>
    </Navbar.Collapse>
  );
}