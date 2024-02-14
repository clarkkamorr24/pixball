import React from "react";

const ChatBody = () => {
  return (
    <div className="px-4 mb-6">
      <div className="w-full px-5 flex flex-col justify-between">
        <div className="flex flex-col mt-5 text-sm">
          <div className="flex justify-start mb-4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              className="object-cover h-8 w-8 rounded-full"
              alt=""
            />
            <div className="ml-2 py-3 px-4 bg-dark rounded-br-lg rounded-tr-lg rounded-tl-xl text-white">
              Good morning
            </div>
          </div>
          <div className="flex justify-start mb-1">
            <div className="ml-10 py-3 px-4 bg-dark rounded-br-lg rounded-tr-lg rounded-tl-xl text-white">
              Can you arrange schedule for next meeting?
            </div>
          </div>
          <div className="flex justify-start mb-4">
            <span className="ml-10 text-mediumGray text-xs">12:45 PM</span>
          </div>
          <div className="flex justify-center mb-4">
            <span className="ml-10 text-mediumGray text-xs">Today</span>
          </div>
          <div className="flex justify-end mb-2">
            <div className="mr-2 py-3 px-4 bg-mediumGray rounded-bl-md rounded-tl-lg rounded-tr-xl text-white">
              Very good morning !
            </div>
          </div>
          <div className="flex justify-end mb-2">
            <div className="mr-2 py-3 px-4 bg-mediumGray rounded-bl-md rounded-tl-lg rounded-tr-xl text-white">
              Okay, I’ll arrange it soon. i noftify you when
            </div>
          </div>
          <div className="flex justify-end mb-2">
            <div className="mr-2 py-3 px-4 bg-mediumGray rounded-bl-md rounded-tl-lg rounded-tr-xl text-white">
              Very Good morning
            </div>
          </div>
          <div className="flex justify-end mb-2">
            <div className="mr-2 py-3 px-4 bg-mediumGray rounded-bl-md rounded-tl-lg rounded-tr-xl text-white">
              Okay, I’ll arrange it soon. i noftify you when it’s done
              <br /> +91-235 2574 2566 kk Sharma pan card eeer2063i
            </div>
          </div>
          <div className="flex justify-end mb-4">
            <span className="mr-2 text-mediumGray text-xs">9:40 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
