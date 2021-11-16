import styled from 'styled-components';

const UIUnit = styled.div`
  margin: auto;
  padding: 40px;
  width: 550px;
  min-height: 500px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;

  &h2 {
    color: $DarkColor;
  }
  .loginform {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export default UIUnit;
