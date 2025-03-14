import clsx from "clsx";
import { NavLink } from "react-router-dom"

import css from './AuthNav.module.css'

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const AuthNav = () => {
  return (
    <div className={css.wrap}>
      <NavLink className={buildCssClasses} to='/register'>Register</NavLink>
      <NavLink className={buildCssClasses} to='/login'>Login</NavLink>
    </div>
  )
}

export default AuthNav