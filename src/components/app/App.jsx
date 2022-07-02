import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import authOperation from '../../redux/auth/Auth-operations';
import PublicRoute from '../routes/PublicRoute';
import PrivateRoute from '../routes/PrivateRoute';
import AppBar from '../appBar/AppBar';
import s from './App.module.css';

const HomePage = lazy(() => import('../pages/homePage/HomePage'));
const RegisterPage  = lazy(() => import('../pages/registerPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/loginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/contactsPage/ContactsPage'));

export default function App() {  
const dispatch = useDispatch();

useEffect(() => {
  dispatch(authOperation.fetchCurrentUser())
}, [dispatch]);

  return (    
      <div className={s.container}>  
      <AppBar/>
      <Suspense fallback={<Spinner animation="border" variant="primary"/>}>
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
        </div> 
  );
}