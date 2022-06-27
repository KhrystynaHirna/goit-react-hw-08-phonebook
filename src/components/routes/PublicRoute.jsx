import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import authSelectors from '../../redux/auth/auth-selectors';

export default function PublicRoute({
  restricted = false,
  redirectTo = '/'
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    shouldRedirect ? <Navigate replace to={redirectTo} /> : <Outlet />
  );
}

PublicRoute.propTypes = {
  redirectTo: PropTypes.string,
};