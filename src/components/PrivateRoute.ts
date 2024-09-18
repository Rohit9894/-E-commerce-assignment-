import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {RootState} from "../redux/store"

function PrivateRoute({ children }:{children:React.ReactElement}) {
  const isAuth = useSelector((state:RootState) => state.auth.isAuth);

  const navigate = useNavigate();
  useEffect(()=> {
    if (isAuth) {
      return children;
    } else {
      return navigate("/login");
    }
  }, [isAuth]);
}

export default PrivateRoute;
