import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const Ul = styled.ul`
  margin-left: 40px;
  margin-right: 40px;

  list-style-type: decimal;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 500;
`;

export const Li = styled.li`
  padding-left: 5px;

  :nth-of-type(odd) {
    background-color: #bbb;
    padding-top: 0.1%;
    padding-bottom: 0.1%;
  }
  :nth-of-type(even) {
    background-color: #ddd;
    padding-top: 0.1%;
    padding-bottom: 0.1%;
  }
`;

export const PContact = styled.p``;

export const ButtonStyled = styled(Button)`
  float: right;
`;
