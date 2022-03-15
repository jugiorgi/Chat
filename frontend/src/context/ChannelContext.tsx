import React, { createContext, useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

export interface IMessage {
  userName: string;
  message: string;
}

export interface IChannel {
  name: string;
  id: string;
  messages: IMessage[];
}

export interface IChannelConext {
  channels: IChannel[];
  channel: IChannel | undefined;
  userName: string;

  createChannel: (name: string) => void;
  createMessage: (message: string) => void;
  login: (userName: string) => void;
  joinChannel: (channelId: string) => void;
}

export const ChannelContext = createContext<IChannelConext>(
  {} as IChannelConext
);

export const ChannelContextProvider = ({ children }: any) => {
  const socket = useRef<Socket>();
  const [userName, setUserName] = useState("");
  const [channels, setChannels] = useState<IChannel[]>([]);
  const [channel, setChannel] = useState<IChannel>();

  useEffect(() => {
    socket.current = io("http://localhost:3333");
    socket.current.on("channels:get", (data) => {
      setChannels(data);
    });
    socket.current.on("channel:get", (channel) => {
      setChannel(channel);
    });
  }, []);

  const login = (userName: string) => {
    socket.current?.emit("user:login", userName);
    setUserName(userName);
  };

  const createChannel = (channelName: string) => {
    socket.current?.emit("channel:create", channelName);
  };

  const joinChannel = (channelId: string) => {
    socket.current?.emit("channel:join", channelId);
  };

  const createMessage = (message: string) => {
    socket.current?.emit("message:create", {
      message,
      channelId: channel?.id,
      userName,
    });
  };

  return (
    <ChannelContext.Provider
      value={{
        login,
        channel,
        channels,
        createChannel,
        createMessage,
        joinChannel,
        userName,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
};
