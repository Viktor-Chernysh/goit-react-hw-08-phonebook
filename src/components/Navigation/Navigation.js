import { Routes, Route, NavLink } from 'react-router-dom';

import Login from 'components/Login/Login';
import Register from 'components/Register/Register';
import Home from 'components/Home/Home';
import s from './Navigation.module.css';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';

export default function Navigation() {
  const isAuth = false;
  return (
    <>
      <ul>
        <li>
          <NavLink
            to="/"
            className={navData => (navData.isActive ? s.activeLink : s.link)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={navData => (navData.isActive ? s.activeLink : s.link)}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className={navData => (navData.isActive ? s.activeLink : s.link)}
          >
            Register
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={<PrivateRoute isAuth={isAuth} component={Home} />}
        />
        <Route
          path="/login"
          element={<PublicRoute isAuth={isAuth} component={Login} />}
        />
        <Route
          path="/register"
          element={<PublicRoute isAuth={isAuth} component={Register} />}
        />
      </Routes>
    </>
  );
}
