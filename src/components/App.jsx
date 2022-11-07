import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { getContacts } from 'redux/selectors';

import { Div, Header, PContact, Section, Message } from './App.styled';
import { addContact, delContact, updFilter } from 'redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();

  const { contactsList, filter } = useSelector(getContacts);

  const handleInput = (values, { resetForm }) => {
    const { name, number } = values;
    const contact = {
      name,
      number,
    };
    const dublicateContact = findDublicate(contact, contactsList);
    dublicateContact
      ? alert(`${contact.name} or ${contact.number} is already in contacts`)
      : dispatch(addContact({ ...values, id: nanoid() }));

    resetForm();
  };

  const findDublicate = (contact, contactsList) => {
    return contactsList.find(
      item =>
        item.name.toLowerCase() === contact.name.toLowerCase() ||
        item.number === contact.number
    );
  };

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = event => {
    dispatch(updFilter(event.currentTarget.value));
  };

  const deleteContact = contactId => {
    dispatch(delContact(contactId));
  };

  const displayedContacts = getFilterContacts();
  return (
    <Div>
      <Header>Phonebook</Header>
      <Section>
        <ContactForm onSubmit={handleInput} />
      </Section>
      <PContact>Contacts</PContact>
      <Filter value={filter} onValueChange={changeFilter} />
      {contactsList.length === 0 && (
        <Message>There is not any contacts</Message>
      )}
      <ContactList contacts={displayedContacts} deleteContact={deleteContact} />
    </Div>
  );
};
