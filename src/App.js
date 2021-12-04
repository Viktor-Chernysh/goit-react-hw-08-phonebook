import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import './App.css';
import Navigation from 'components/Navigation/AppBar';
import { isLogin, getToken } from 'redux/auth/auth-selectors';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import Login from 'components/Login/Login';
import Register from 'components/Register/Register';
import Home from 'components/Home/Home';
import { setUser } from 'redux/slices';

import { useGetUserInfoQuery } from 'redux/auth/userSlice';

export default function App() {
  const isAuth = useSelector(isLogin);
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const { data } = useGetUserInfoQuery(null, {
    skip: token === null || isAuth,
  });
  // console.log(data);
  useEffect(() => {
    data && dispatch(setUser(data));
  }, [data, dispatch]);
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
