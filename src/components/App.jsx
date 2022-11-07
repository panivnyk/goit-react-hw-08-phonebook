import { useSelector } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { getContacts } from 'redux/selectors';

import { Div, Header, PContact, Section, Message } from './App.styled';

export const App = () => {
  const { contactsList } = useSelector(getContacts);

  return (
    <Div>
      <Header>Phonebook</Header>
      <Section>
        <ContactForm />
      </Section>
      <PContact>Contacts</PContact>
      <Filter />
      {contactsList.length === 0 && (
        <Message>There is not any contacts</Message>
      )}
      <ContactList />
    </Div>
  );
};
