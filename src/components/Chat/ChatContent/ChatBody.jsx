import React from "react";

const ChatBody = () => {
  return (
    <div className="mb-6 px-4">
      <div className="flex w-full flex-col justify-between px-5">
        <div className="mt-5 flex flex-col text-sm">
          <div className="mb-4 flex justify-start">
            {/* <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              className="h-8 w-8 rounded-full object-cover"
              alt=""
            /> */}
            <div className="bg-dark ml-2 rounded-br-lg rounded-tl-xl rounded-tr-lg px-4 py-3 text-white">
              Good morning
            </div>
          </div>
          <div className="mb-1 flex justify-start">
            <div className="bg-dark ml-10 rounded-br-lg rounded-tl-xl rounded-tr-lg px-4 py-3 text-white">
              Can you arrange schedule for next meeting?
            </div>
          </div>
          <div className="mb-4 flex justify-start">
            <span className="text-mediumGray ml-10 text-xs">12:45 PM</span>
          </div>
          <div className="mb-4 flex justify-center">
            <span className="text-mediumGray ml-10 text-xs">Today</span>
          </div>
          <div className="mb-2 flex justify-end">
            <div className="bg-mediumGray mr-2 rounded-bl-md rounded-tl-lg rounded-tr-xl px-4 py-3 text-white">
              Very good morning !
            </div>
          </div>
          <div className="mb-2 flex justify-end">
            <div className="bg-mediumGray mr-2 rounded-bl-md rounded-tl-lg rounded-tr-xl px-4 py-3 text-white">
              Okay, I’ll arrange it soon. i noftify you when
            </div>
          </div>
          <div className="mb-2 flex justify-end">
            <div className="bg-mediumGray mr-2 rounded-bl-md rounded-tl-lg rounded-tr-xl px-4 py-3 text-white">
              Very Good morning
            </div>
          </div>
          <div className="mb-2 flex justify-end">
            <div className="bg-mediumGray mr-2 rounded-bl-md rounded-tl-lg rounded-tr-xl px-4 py-3 text-white">
              Okay, I’ll arrange it soon. i noftify you when it’s done
              <br /> +91-235 2574 2566 kk Sharma pan card eeer2063i
            </div>
          </div>
          <div className="mb-4 flex justify-end">
            <span className="text-mediumGray mr-2 text-xs">9:40 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
