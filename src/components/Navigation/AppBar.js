import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import s from './Navigation.module.css';
import Section from 'components/Section/Section';

import { isLogin } from 'redux/auth/auth-selectors';
import UserMenu from 'components/UserMenu/UserMenu';

export default function Navigation() {
  const isAuth = useSelector(isLogin);
  return (
    <>
      {isAuth ? (
        <>
          <NavLink
            to="/"
            className={navData => (navData.isActive ? s.activeLink : s.link)}
          />
          <UserMenu />
        </>
      ) : (
        <Section>
          <nav>
            <NavLink
              to="/login"
              className={navData => (navData.isActive ? s.activeLink : s.link)}
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className={navData => (navData.isActive ? s.activeLink : s.link)}
            >
              Register
            </NavLink>
          </nav>
        </Section>
      )}
    </>
  );
}
