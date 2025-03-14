import './App.css';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { refreshUser } from '../redux/auth/operations';
import Layout from './Layout/Layout';

const HomePage = lazy(()=> import('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(()=> import('../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(()=> import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(()=> import('../pages/ContactsPage/ContactsPage'));


function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  const isRefreshing = useSelector(selectIsRefreshing);


  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // Зберігаємо шлях у localStorage
  useEffect(() => {
    localStorage.setItem('lastPath', location.pathname);
  }, [location]);

  // При завантаженні додатку перенаправляємо на збережений шлях
  useEffect(() => {
    const lastPath = localStorage.getItem('lastPath');
    if (lastPath) {
      navigate(lastPath, { replace: true });
    }
  }, [navigate]);

  if(isRefreshing){
    return <div>Refreshing user...</div>
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={<RegistrationPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} />
          }
        />
      </Routes>
    </Layout>
    );
};

export default App
