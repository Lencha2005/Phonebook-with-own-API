import { useSelector } from "react-redux";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { selectUserIsLoading } from "../../redux/auth/selectors";
import Loader from "../../components/Loader/Loader";


const RegistrationPage = () => {
  const isLoading = useSelector(selectUserIsLoading);
  return (
    <>
    <RegistrationForm />
    {isLoading && <Loader />}
    </>
  )
}

export default RegistrationPage