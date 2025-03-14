import { useSelector } from "react-redux"
import LoginForm from "../../components/LoginForm/LoginForm"
import { selectUserIsLoading } from "../../redux/auth/selectors"
import Loader from "../../components/Loader/Loader";

const LoginPage = () => {
  const isLoading = useSelector(selectUserIsLoading);

  return (
    <>
    <LoginForm />
    {isLoading && <Loader />}
    </>
  )
}

export default LoginPage