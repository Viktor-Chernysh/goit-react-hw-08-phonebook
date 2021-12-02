import { Navigate } from 'react-router';

export default function PublicRoute({ isAuth, component: C }) {
  return <>{isAuth ? <Navigate to="/" /> : <C />}</>;
}
