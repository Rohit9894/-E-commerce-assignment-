import { ShoppingBag, User } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className=" container flex-center justify-between py-4 box-">
      <div className="italic">
        <h1 className="text-2xl  text-primary font-semibold">E-Commerce</h1>
      </div>
      <div className="flex-center gap-4">
        <ShoppingBag size={"20px"} />
        <Button className="w-12">
          <User size={"20px"} />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
