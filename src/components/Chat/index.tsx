import React from "react";
import ChatHeader from "./ChatContent/ChatHeader";
import ChatBody from "./ChatContent/ChatBody";
import ChatSend from "./ChatContent/ChatSend";

const Chat: React.FC = () => {
  return (
    <div className="flex flex-col rounded-md bg-white outline outline-1 outline-stroke dark:outline-strokedark dark:bg-black pt-7.5 md:col-span-2 xl:col-span-3">
      <ChatHeader />
      <ChatBody />
      <ChatSend />
    </div>
  );
};

export default Chat;
