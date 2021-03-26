import styled from 'styled-components';

export const Button = styled.button`
  background: #f27137;
  color: #fff;
  border: none;
  border-radius: 0;
  font-size: 1.5em;
  padding: 10px 20px;
  font-family: 'New Tegomin', serif;
  cursor: pointer;
  box-shadow: #332c36 3px 3px;

  &:hover {
    background-color: #a40000;
  }

  &:focus {
    outline: none;
  }
`;
