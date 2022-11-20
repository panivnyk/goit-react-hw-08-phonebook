import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

import { fetchContacts } from 'redux/contacts/operations';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

import { Div, Header, PContact, Section } from './ContactEditor.styled';

export const ContactEditor = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  //   return (
  //     <Form onSubmit={handleSubmit}>
  //       <Input name="text" />
  //       <Button type="submit">Add contact</Button>
  //     </Form>
  //   );
  // };

  return (
    <Div>
      <Header>Phonebook</Header>

      <Section>
        <ContactForm />
      </Section>
      <PContact>Contacts</PContact>
      {isLoading && !error && <Loader />}
      <Filter />
    </Div>
  );
};
