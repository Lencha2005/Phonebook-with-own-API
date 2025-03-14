import css from './HomePage.module.css';
import book from '../../img/book.png';

const HomePage = () => {
  return (
    <div className={css.wrap}>
      <h1>Phonebook</h1>
     <p className={css.text}>
Welcome to the Phonebook — a convenient and efficient tool for storing and managing your contacts! Here, you can easily add, edit, and delete contacts with a simple and intuitive interface. Enjoy easy contact management in just a few clicks!</p> 
<img src={book} alt='book' className={css.img}/>
      </div>
  )
}

export default HomePage