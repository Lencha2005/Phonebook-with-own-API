import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import clsx from "clsx";
import css from './Navigation.module.css';

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const Navigation = () => {
  const isLoggenIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}> 
      <NavLink className={buildCssClasses} to='/'>Home</NavLink>
      {isLoggenIn && <NavLink className={buildCssClasses} to='/contacts'>Contacts</NavLink>}
    </nav>
  )
}

export default Navigation