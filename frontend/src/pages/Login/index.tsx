import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChannelContext } from "../../hooks/useChannelContext";

import { Container, Title, Form } from "./styles";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const { login } = useChannelContext();
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    login(username);
    navigate("/channels");
  }

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <strong>Usuário: </strong>
        <input
          type="text"
          placeholder="Seu usuário"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
};

export default Login;
