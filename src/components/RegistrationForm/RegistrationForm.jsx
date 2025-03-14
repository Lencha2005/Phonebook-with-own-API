import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { registrationFormSchema } from "../../schemas/schemas";

import css from './RegistrationForm.module.css';

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
      dispatch(register(values))
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
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={registrationFormSchema}>
      <Form className={css.form}>
        <label className={css.label}>
          <p className={css.text}>Name</p>
          <Field className={css.input} type="text" name="name" placeholder="Lena Bondar"/>
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
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
        <button className={css.btn} type="submit">Sing Up</button>
      </Form>
    </Formik>
    <Toaster position="top-right"/>
    </>
  )
}


export default RegistrationForm