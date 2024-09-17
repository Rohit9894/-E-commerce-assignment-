import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex-center gap-2 cursor-pointer">
        <img className="h-8" src="/logo.png" alt=" store" />
        <h1 className="text-2xl italic  text-primary font-semibold">
          E-Commerce
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
