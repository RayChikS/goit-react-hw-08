import { useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contacts/selectors';
import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);

  return (
    <div className={css.container}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className={css.list}>
          {contacts.map(contact => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
