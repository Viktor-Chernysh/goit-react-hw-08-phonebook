import { Navigate } from 'react-router';
import PropTypes from 'prop-types';

export default function PrivateRoute({ isAuth, component: C }) {
  return <>{isAuth ? <C /> : <Navigate to="/login" />}</>;
}

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool,
  component: PropTypes.elementType,
};
