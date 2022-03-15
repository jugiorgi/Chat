import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useChannelContext } from "../../hooks/useChannelContext";

import { Container, ChannelName, Header, Form, ChatBox } from "./styles";

const Chat: React.FC = () => {
  const [message, setMessage] = useState("");
  const { channel, joinChannel, createMessage, userName } = useChannelContext();
  const { channelId } = useParams<{ channelId: string }>();
  const navigate = useNavigate();
  const chatBotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!channelId) {
      navigate("/channels");
      return;
    }

    if (!userName) {
      navigate("/");
      return;
    }

    joinChannel(channelId);
  }, []);

  const goToBottom = () => {
    if (chatBotRef.current) {
      chatBotRef.current.scrollTop = chatBotRef.current?.scrollHeight;
    }
  };

  useEffect(() => {
    goToBottom();
  }, [channel?.messages]);

  function handleSubmit(event: any) {
    event.preventDefault();
    createMessage(message);
    setMessage("");
  }

  return (
    <Container>
      <Header>
        <ChannelName># {channel?.name}</ChannelName>
        <Link to="/channels">Voltar</Link>
      </Header>

      <ChatBox ref={chatBotRef}>
        {channel?.messages.map((message, index) => (
          <div key={index}>
            <strong>{`${message.userName}: `}</strong>
            {message.message}
          </div>
        ))}
      </ChatBox>

      <Form onSubmit={(event) => handleSubmit(event)}>
        <input
          placeholder="Escreva a sua mensagem"
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
};

export default Chat;
