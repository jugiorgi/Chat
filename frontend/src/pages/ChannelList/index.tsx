import React from "react";
import { Link } from "react-router-dom";
import { useChannelContext } from "../../hooks/useChannelContext";

import { Container } from "./styles";

const ChannelList: React.FC = () => {
  const { channels } = useChannelContext();

  return (
    <Container>
      {channels.map((channel) => (
        <li key={channel.id}>
          <Link to={`/chat/${channel.id}`}>{channel.name}</Link>
        </li>
      ))}
    </Container>
  );
};

export default ChannelList;
