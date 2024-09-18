import { ShoppingBag, User } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {RootState} from "../redux/store"


const Navbar = () => {
  const cartData = useSelector((state:RootState) => state.cart.cart);

  return (
    <nav className=" container flex-center justify-between py-4 box-">
      <Logo />
      <div className="flex-center gap-4">
        <div className="relative">
          <div className="absolute -top-2 -right-2 text-[10px] text-white flex-center justify-center rounded-full bg-red-800 size-4">
            {cartData.length}
          </div>
          <Link to="/cart">
            <ShoppingBag cursor={"pointer"} size={"20px"} />
          </Link>
        </div>
        <Button className="w-12 lg:w-32 flex-center gap-2">
          <User size={"20px"} />
          <p className="hidden md:block">My Account</p>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
