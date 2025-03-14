import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectContactsError } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Toaster } from 'react-hot-toast';

import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper} >
      <h1 className={css.title}>Your Phonebook</h1>
      <div className={css.wrapperForm}>
      <ContactForm />
      {error && <ErrorMessage />}
      <SearchBox />
      </div>
      <ContactList />
      <Toaster position="top-right" />
    </div>
  );
};

export default ContactsPage;
