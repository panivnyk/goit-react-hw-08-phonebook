import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { Form, Input, Button } from './ContactEditor.styled';

export const ContactEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    if (text !== '') {
      dispatch(addContact(text));
      form.reset();
      return;
    }
    alert('Contact cannot be empty. Enter some text!');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="text" />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
