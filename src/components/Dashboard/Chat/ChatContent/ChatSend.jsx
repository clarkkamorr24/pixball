import { SendIcon } from "@/components/Icons";
import React from "react";

const ChatSend = () => {
  return (
    <div className="px-4 py-4">
      <form method="">
        <div className="dark:shadow-0 shadow-2 dark:bg-lightGray relative ml-2 rounded-md p-3">
          <button className="bg-primary absolute right-1 top-1/2 flex -translate-y-1/2 items-center gap-2 rounded-md p-2">
            <p className="text-sm text-white">Send</p>
            <SendIcon />
          </button>
          <input
            type="text"
            placeholder="Send a message"
            className="placeholder-mediumGray xl:w-125 w-full bg-transparent pr-4 font-medium focus:outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default ChatSend;
