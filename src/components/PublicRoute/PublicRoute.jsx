import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

export default function PublicRoute({ children }) {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return <>{isLoggedIn ? <Navigate to="/contacts" /> : children}</>;
  }