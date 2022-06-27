import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import authOperation from '../redux/auth/auth-operation'
import 'bootstrap/dist/css/bootstrap.min.css';
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';
import AppBar from './AppBar/AppBar';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage  = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

export default function App() {  
const dispatch = useDispatch();

useEffect(() => {
  dispatch(authOperation.fetchCurrentUser())
}, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<Spinner animation="border" variant="primary" className='mt-4'/>}>
        <Routes>
        <Route element={<PublicRoute/>}>
          <Route path='/' element={<HomePage/>}/>
        </Route>
        <Route element={<PublicRoute restricted/>}>
          <Route path='/register' element={<RegisterPage/>}/>
        </Route>
        <Route element={<PublicRoute redirectTo="/contacts" restricted/>}>
          <Route path='/login' element={<LoginPage/>}/>
        </Route>
        <Route element={<PrivateRoute redirectTo="/login"/>}>
          <Route path='/contacts' element={<ContactsPage/>}/>
        </Route>
      </Routes>
      </Suspense>
      
    </>
  );
}