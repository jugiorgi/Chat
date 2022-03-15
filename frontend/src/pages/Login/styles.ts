import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

export const Title = styled.strong`
  font-size: 30px;
  margin: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 300px;

  strong {
    margin-bottom: 10px;
  }
  button,
  input {
    width: 300px;
  }
`;
