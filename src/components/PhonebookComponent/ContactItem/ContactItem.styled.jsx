import styled from '@emotion/styled';

export const Text = styled.p`
  width: 150px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border: 1px solid black;
  border-radius: 6px;
  background-color: #43ca9e;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  padding: 2px 10px;
  border-radius: 8px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: orangered;
    color: white;
  }
`;
