import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { Div, Header, PContact, Section } from './App.styled';

export const App = () => {
  return (
    <Div>
      <Header>Phonebook</Header>
      <Section>
        <ContactForm />
      </Section>
      <PContact>Contacts</PContact>
      <Filter />
      <ContactList />
    </Div>
  );
};
