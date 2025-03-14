import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Container from "../ui/Container/Container";

import css from './Header.module.css'

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  return (
    <Container>
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu/> : <AuthNav/>}
    </header>
    </Container>
  )
}

export default Header