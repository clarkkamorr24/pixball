import React from "react";
import ChatHeader from "./ChatContent/ChatHeader";
import ChatBody from "./ChatContent/ChatBody";
import ChatSend from "./ChatContent/ChatSend";

const Chat = () => {
  return (
    <div className="dark:outline-strokedark pt-7.5 outline-stroke flex flex-col rounded-md bg-white outline outline-1 md:col-span-2 xl:col-span-3 dark:bg-black">
      <ChatHeader />
      <ChatBody />
      <ChatSend />
    </div>
  );
};

export default Chat;
