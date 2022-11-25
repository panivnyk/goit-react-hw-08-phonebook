import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';

import {
  LabelName,
  AddButton,
} from 'components/ContactForm/ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { contactsList } = useSelector(selectContacts);

  const handleInput = (values, { resetForm }) => {
    const dublicateContact = findDublicate(values, contactsList);
    dublicateContact
      ? alert(`${values.name} or ${values.number} is already in contacts`)
      : dispatch(addContact(values));

    resetForm();
  };

  const findDublicate = (contact, contactsList) => {
    return contactsList.find(
      item =>
        item.name.toLowerCase() === contact.name.toLowerCase() ||
        item.number === contact.number
    );
  };

  const initialValues = {
    name: '',
    number: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        } else if (!values.number) {
          errors.number = 'Required';
        } else if (
          !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){3,14}(\s*)?$/i.test(
            values.number
          )
        ) {
          errors.number = 'Invalid - only digits, at least 3';
        }
        return errors;
      }}
      onSubmit={handleInput}
    >
      <Form autoComplete="on">
        <LabelName htmlFor="name">
          <Field
            component={TextField}
            type="text"
            name="name"
            label="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name"
          />
        </LabelName>
        <LabelName htmlFor="number">
          <Field
            component={TextField}
            type="tel"
            name="number"
            label="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter number"
          />
        </LabelName>
        <AddButton variant="outlined" type="submit">
          Add
        </AddButton>
      </Form>
    </Formik>
  );

  // return (
  //   <Formik initialValues={initialValues} onSubmit={handleInput}>
  //     <FormContact autoComplete="on">
  //       <LabelName htmlFor="name">
  //         Name
  //         <Input
  //           type="text"
  //           name="name"
  //           // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  //           // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  //           placeholder="Enter name"
  //         />
  //       </LabelName>
  //       <LabelName htmlFor="number">
  //         Number
  //         <Input
  //           type="tel"
  //           name="number"
  //           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  //           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  //           placeholder="Enter number"
  //         />
  //       </LabelName>
  //       <Button type="submit">Add contact</Button>
  //     </FormContact>
  //   </Formik>
  // );
};
