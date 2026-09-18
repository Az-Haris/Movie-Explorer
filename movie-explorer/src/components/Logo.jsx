import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center gap-1">
      <img src="/favicon.svg" alt="Logo" />
      <span className="text-xl font-bold text-red-500">
        Movie<span className="text-blue-500">Explorer</span>
      </span>
    </Link>
  );
};

export default Logo;
