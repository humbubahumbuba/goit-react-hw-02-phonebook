import styled from '@emotion/styled';

export const FilterInput = styled.input`
  height: 36px;
`;

export const FilterWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 20px 0px 0px 95px;
`;

export const Button = styled.button`
  cursor: pointer;
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
