import { Link } from "react-router-dom";

export const Logo = () => (
  <Link to="/" className="brand-logo">
    <img
      src="/logo192.png"
      alt="chef's logo"
      height="30px"
      style={{ position: "relative", top: "5px" }}
    />
    <span className="logo orange-text text-accent-4">Chef's</span>
  </Link>
);
