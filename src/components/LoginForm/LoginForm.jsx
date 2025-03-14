import toast, { Toaster } from "react-hot-toast";
import { useDispatch} from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { login } from "../../redux/auth/operations";
import { loginFormSchema } from "../../schemas/schemas";

import css from './LoginForm.module.css';

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(login(values))
        .unwrap()
        .catch((error) => {
          if (error === "Request failed with status code 400") {
            toast.error('Incorrect email or password. Try again!');
          }
        });
      actions.resetForm();
    };
    
  return (
    <>
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginFormSchema}>
      <Form className={css.form}>
        <label className={css.label}>
        <p className={css.text}>Email</p>
          <Field className={css.input} type="text" name="email" placeholder="example@mail.com"/>
          <ErrorMessage className={css.error} name="email" component="span" />
        </label>
        <label className={css.label}>
        <p className={css.text}>Password</p>
          <Field className={css.input} type="password" name="password" placeholder="Your password"/>
          <ErrorMessage className={css.error} name="password" component="span" />
        </label>
        <button className={css.btn} type="submit">Sing In</button>
      </Form>
    </Formik>
    <Toaster position="top-right"/>
    </>
  )
}

export default LoginForm