import styled from "styled-components";

export const Container = styled.div`
  margin: 50px;
`;

export const ChannelName = styled.strong``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.form`
  width: 100%;

  input {
    width: 80%;
  }

  button {
    margin-left: 1%;
    width: 19%;
  }
`;

export const ChatBox = styled.div`
  margin: 30px 0 0 0;
  border-radius: 5px;
  background: #30363d;
  width: 100%;
  min-height: 300px;
  max-height: 300px;
  overflow-y: auto;
  padding: 10px;

  div,
  strong {
    background: #30363d;
    color: #fff;
  }
`;
