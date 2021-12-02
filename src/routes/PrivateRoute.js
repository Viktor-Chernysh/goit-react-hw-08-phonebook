import { Navigate } from 'react-router';

export default function PrivateRoute({ isAuth, component: C }) {
  return <>{isAuth ? <C /> : <Navigate to="/login" />}</>;
}
