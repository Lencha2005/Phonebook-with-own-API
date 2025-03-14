import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css'


const ContactList = () => {
    const dispatch = useDispatch();
const contacts = useSelector(selectFilteredContacts);

useEffect(() => {
dispatch(fetchContacts())
}, [dispatch])

  return (
    <>
    {Array.isArray(contacts) && contacts.length === 0 && (
        <p>There are no contacts in your phonebook yet!</p>
      )}
    <ul className={css.list}>
      {Array.isArray(contacts) && contacts.length > 0 && (
        contacts.map(contact => {
        return (
        <li key={contact.id} className={css.item}>
          <Contact
          name={contact.name}
          number={contact.number}
          id={contact.id}
          />
        </li>
      )})
    )}
    </ul>
    </>
  )
};

export default ContactList;