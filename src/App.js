import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      userName="zimmer"
      userSecret="123123"
      projectID="bfe29bef-304e-484e-812b-b37f02b40a7b"
      renderChatFeed={(props) => <ChatFeed {...props} />}
    />
  );
};

export default App;
