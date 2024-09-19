import { ShoppingBag, User } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { signOut } from "@/redux/auth.slice";

const Navbar = () => {
  const cartData = useSelector((state: RootState) => state.cart.cart);
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logout() {
    dispatch(signOut());
    navigate("/login");
  }

  return (
    <nav className=" container fixed top-0 w-full bg-white flex-center justify-between py-4 box-">
      <Logo />
      <div className="flex-center gap-4">
        {isAuth && (
          <div className="relative">
            <div className="absolute -top-2 -right-2 text-[10px] text-white flex-center justify-center rounded-full bg-red-800 size-4">
              {cartData.length}
            </div>

            <Link to="/cart">
              <ShoppingBag cursor={"pointer"} size={"20px"} />
            </Link>
          </div>
        )}
        {!isAuth && (
         <div className="hidden sm:block">
           <Button
            onClick={() => (isAuth ? "" : navigate("/login"))}
            className=" lg:w-32 flex-center gap-2"
          >
            <div className="hidden md:block">
              <User size={"20px"} />
            </div>
            <p>{isAuth ? "Hey Jhon" : "Login"}</p>
          </Button>
         </div>
        )}
        {isAuth && (
          <Button onClick={logout} className="bg-red-800 hover:bg-red-600">
            Logout
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
