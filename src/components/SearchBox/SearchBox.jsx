import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

import css from './SearchBox.module.css'

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilter = (e) => {
    dispatch(changeFilter(e.target.value));
};
       
return (
  <div className={css.wrap}>
  <p className={css.text}>Find contacts by name or phone number</p>
  <input className={css.input} type="text" value={filter} onChange={onFilter}/>
  </div>
)
}

export default SearchBox