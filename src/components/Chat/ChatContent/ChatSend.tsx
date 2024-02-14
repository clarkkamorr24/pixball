import { SendIcon } from "@/components/Icons";
import React from "react";

const ChatSend = () => {
  return (
    <div className="px-4 py-4">
      <form method="">
        <div className="relative dark:bg-lightGray ml-2 p-3 rounded-md dark:shadow-0 shadow-2">
          <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-primary flex items-center gap-2 rounded-md">
            <p className="text-white text-sm">Send</p>
            <SendIcon />
          </button>
          <input
            type="text"
            placeholder="Send a message"
            className="w-full bg-transparent pr-4 font-medium focus:outline-none xl:w-125 placeholder-mediumGray"
          />
        </div>
      </form>
    </div>
  );
};

export default ChatSend;
