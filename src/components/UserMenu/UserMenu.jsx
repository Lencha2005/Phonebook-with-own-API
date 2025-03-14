import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineLogin } from 'react-icons/md';
import { selectUser } from '../../redux/auth/selectors';

import { logout } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.wrap}>
      <p className={css.text}>Hello, {user.name}!</p>
      <button type="button" onClick={onLogout} className={css.btn}>
        <MdOutlineLogin className={css.icon} />
      </button>
    </div>
  );
};

export default UserMenu;
