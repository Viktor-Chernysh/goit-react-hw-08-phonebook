import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navigation from 'components/Navigation/AppBar';
import { isLogin } from 'redux/auth/auth-selectors';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import Login from 'components/Login/Login';
import Register from 'components/Register/Register';
import Home from 'components/Home/Home';

// import { useGetUserQuery } from 'redux/auth/userSlice';

export default function App() {
  // const { getUser } = useGetUserQuery();
  // console.log(getUser);
  const isAuth = useSelector(isLogin);
  // console.log(isAuth);
  return (
    <>
      <Navigation />
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

// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// });
// export default connect(mapStateToProps, null)(App);
