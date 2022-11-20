import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  width: 100%;
  gap: 4px;
  margin-bottom: 12px;
`;
export const Input = styled.input`
  flex-grow: 1;
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

export const Div = styled.div`
  padding: 20px;
`;

export const Header = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 10px 20px;
`;

export const PContact = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin: 40px 0px 20px 30px;
`;
export const Section = styled.section`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  width: 650px;
  font-size: 20px;
`;
