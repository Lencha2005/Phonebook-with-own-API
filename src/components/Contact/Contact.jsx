import { HiPhone } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";
import { MdOutlineDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';

import { setCurrentContact } from "../../redux/contacts/slice";
import { deleteContact, editContact } from "../../redux/contacts/operations";

import css from './Contact.module.css'


const Contact = ( {id, name, number} ) => {
  const dispatch = useDispatch();

  const onDeleteContact = (contactId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to delete this contact?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      background: '#2d2d2d',
      color: '#fff',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteContact(contactId));
      }
    });
  };

  const onEditContact = () => {
    dispatch(setCurrentContact({ id, name, number }));
    Swal.fire({
      title: 'Edit Contact',
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Name" value="${name}">
        <input id="swal-input2" class="swal2-input" placeholder="Number" value="${number}">
      `,
      showCancelButton: true,
      confirmButtonText: 'Save',
      background: '#2d2d2d',
      color: '#fff',
      preConfirm: () => {
        const editedName = document.getElementById('swal-input1').value;
        const editedNumber = document.getElementById('swal-input2').value;
        return { name: editedName, number: editedNumber };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedContact = {
          id,
          name: result.value.name,
          number: result.value.number,
        };
        dispatch(editContact(updatedContact));
      }
    });
  };

  return (
    <div className={css.wrap}>
    <div className={css.wrapper}>
    <p className={css.name}><HiUser /> {name}</p>
    <p className={css.number}><HiPhone /> {number}</p> 
    </div>
    <div className={css.btnWrap}>
    <button type='button' className={css.btn} onClick={() => onDeleteContact(id)}><MdOutlineDeleteForever className={css.icon}/></button>
    <button type='button' className={css.btn} onClick={onEditContact}><CiEdit className={css.icon}/></button>
    </div>
</div>
  )
}

export default Contact