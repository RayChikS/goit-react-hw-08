import { useId } from 'react';
import css from './ContactSearch.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../redux/contacts/selectors';
import { filterByName } from '../../redux/contacts/filterSlice';

export const ContactSearch = () => {
  const searchName = useId();
  const dispatch = useDispatch();
  const handleFilterChange = e => {
    const { value } = e.target;
    dispatch(filterByName(value.trim() || ''));
  };
  const value = useSelector(selectFilters);
  return (
    <div className={css.form}>
      <label htmlFor={searchName}>Find contacts by name</label>
      <input
        className={css.field}
        type="text"
        name="search"
        id={searchName}
        value={value.name}
        onChange={handleFilterChange}
      />
    </div>
  );
};
