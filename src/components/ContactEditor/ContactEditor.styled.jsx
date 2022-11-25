import styled from '@emotion/styled';

export const Form = styled.form`
  width: 100%;
  gap: 4px;
  margin-bottom: 12px;
`;
export const Input = styled.input`
  padding: 8px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  font: inherit;
  line-height: 16px;
  letter-spacing: 0.01em;
  resize: none;
`;
export const Button = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  padding: 0 8px;
  border-radius: 4px;
  background-color: #3f51b5;
  color: #fff;
  &:hover,
  &:focus {
    background-color: #303f9f;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const Div = styled.div``;

export const Header = styled.p`
  display: flex;
  font-size: 14px;
  text-transform: uppercase;
  justify-content: center;
  margin: 0;
`;

export const PContact = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 20px;
  padding: 10px;
  margin-bottom: 20px;
`;
