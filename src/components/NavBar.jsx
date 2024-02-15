import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-screen mb-10 flex gap-5 justify-center items-center">
      <NavLink>Home</NavLink>
      <NavLink to={"/country"}>Countries</NavLink>
    </div>
  );
};

export default NavBar;
