import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactEditor } from '../components/ContactEditor/ContactEditor';
import { fetchContacts } from '../redux/contacts/operations';
import { selectLoading } from '../redux/contacts/selectors';
import { ContactSearch } from '../components/ContactSearch/ContactSearch';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactEditor />
      <ContactSearch />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
