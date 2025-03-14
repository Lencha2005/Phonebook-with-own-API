import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { contactFormSchema } from '../../schemas/schemas';

import css from './ContactForm.module.css';

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactFormSchema}>
      <Form className={css.form}>
        <label className={css.label}>
          <p className={css.text}>Name</p>
          <Field className={css.input} type="text" name="name" placeholder='lena'/>
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
        <label className={css.label}>
        <p className={css.text}>Number</p>
          <Field className={css.input} type="text" name="number" placeholder='XXXXXXXXXX'/>
          <ErrorMessage className={css.error} name="number" component="span" />
        </label>
        <button className={css.btn} type="submit">Add contact</button>
      </Form>
    </Formik>
  )
}

export default ContactForm