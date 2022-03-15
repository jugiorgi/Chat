import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChannelContext } from "../../hooks/useChannelContext";

import { Container, Form } from "./styles";

const ChannelCreate: React.FC = () => {
  const [channelName, setChannelName] = useState("");
  const { createChannel, userName } = useChannelContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userName) {
      navigate("/");
      return;
    }
  }, []);

  function handleSubmit(event: any) {
    event.preventDefault();
    createChannel(channelName);
    setChannelName("");
  }

  return (
    <Container>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <p>Nome do Canal</p>
        <input
          type="text"
          value={channelName}
          onChange={(event) => setChannelName(event.target.value)}
        />

        <button type="submit">Criar</button>
      </Form>
    </Container>
  );
};

export default ChannelCreate;
