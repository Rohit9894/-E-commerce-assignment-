import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function PrivateRoute({ children }: { children: React.ReactElement }) {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default PrivateRoute;
