import styled from '@emotion/styled';

export const Form = styled.form`
  margin-top: 20px;
  justify-content: space-between;
`;

export const Button = styled.button`
  cursor: pointer;
  display: block;
  text-align: center;
  margin: 0 auto;
  outline: none;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: orangered;
    color: white;
  }
`;

export const FormWrapper = styled.div`
  justify-content: center;
  display: flex;
  margin-bottom: 20px;
`;
