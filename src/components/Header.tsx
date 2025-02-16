import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to={"/"} className={activeClassName} end>
      DashBoard
    </NavLink>
    <NavLink to={"/create"} className={activeClassName}>
      Create Expense
    </NavLink>
  </header>
);
const activeClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? "nav-is-active" : "";

export default Header;
