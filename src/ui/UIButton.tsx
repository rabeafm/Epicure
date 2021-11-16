import styled from 'styled-components';

const UIButton = styled.button`
  padding: 14px 16px;
  @media only screen and (max-width: 300px) {
    padding: 14px 12px;
  }
  border: 0;
  background: rgba(232, 196, 122, 0.8);
  &:hover,
  &:active {
    background: rgba(232, 196, 122, 0.4);
  }
  &:focus {
    outline: none;
  }
`;

export default UIButton;
