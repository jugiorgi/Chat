import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import ChannelCreate from "../pages/ChannelCreate";
import ChannelList from "../pages/ChannelList";
import Chat from "../pages/Chat";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/chat/:channelId" element={<Chat />} />
    <Route
      path="/channels"
      element={
        <>
          <ChannelCreate />
          <ChannelList />
        </>
      }
    />
  </Routes>
);

export default AppRoutes;
