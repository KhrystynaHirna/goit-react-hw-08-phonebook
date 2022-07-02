import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/Auth-selectors';
import authOperations from '../../redux/auth/Auth-operations';
import { Navbar, Button } from 'react-bootstrap';
import s from './UserMenu.module.css'


export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Navbar.Collapse className={s.container}>
      <Navbar.Text className={s.text}>Welcome, {name}!</Navbar.Text>     
      <Button variant="light" onClick={() => dispatch(authOperations.logOut())} className={s.button}>
        Log out
      </Button>
    </Navbar.Collapse>
  );
}