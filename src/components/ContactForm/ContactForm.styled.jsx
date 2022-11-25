import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Form, Field, ErrorMessage } from 'formik';

export const FormContact = styled(Form)`
  display: flex;
  flex-direction: row;
`;
export const LabelName = styled.label`
  text-align: left;
  margin-bottom: 20px;
  margin-left: 5px;
`;
export const Input = styled(Field)`
  padding: 3px;
  display: block;
  width: 300px;
  text-align: left;
  margin: 0;
`;
export const Error = styled(ErrorMessage)`
  margin-top: -30px;
  margin-left: 320px;
  width: 300px;

  text-align: left;
  font-size: 16px;
  color: red;
`;
export const AddButton = styled(Button)`
  border-color: black;
  background: ada9a97a;
  color: black;
  padding: 14px 14px;
  margin-left: 5px;
`;
