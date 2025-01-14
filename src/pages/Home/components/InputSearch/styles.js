import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  box-shadow: (0px 4px 10px rgba(0, 0, 0, 0.04));

  input {
    width: 100%;
    background-color: #fff;
    border: none;
    border-radius: 25px;
    height: 50px;
    outline: none;
    padding: 0px 16px;

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;
