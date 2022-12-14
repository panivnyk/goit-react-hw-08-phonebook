import { useDispatch, useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';

import { logIn } from 'redux/auth/operations';
import { Form, Label } from './LoginForm.styled';
import { selectLoginError } from 'redux/auth/selectors';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectLoginError);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <input type="email" name="email" />
        </Label>
        <Label>
          Password
          <input type="password" name="password" />
        </Label>
        <button type="submit">Log In</button>
      </Form>
      {error && (
        <p>
          <Alert variant="outlined" severity="error">
            Something wrong: Check your password and email or may be you are not
            registered user.
          </Alert>
        </p>
      )}
    </>
  );
};
