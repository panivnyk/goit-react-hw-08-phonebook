import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Watch } from 'react-loader-spinner';

import { Div, Header, PContact, Section, Loading } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Div>
      <Header>Phonebook</Header>
      <Section>
        <ContactForm />
      </Section>
      <PContact>Contacts</PContact>
      <Filter />

      {isLoading && !error && (
        <Loading>
          <Watch
            height="25"
            width="25"
            radius="35"
            color="grey"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
          Request in progress...
        </Loading>
      )}

      <ContactList />
    </Div>
  );
};
