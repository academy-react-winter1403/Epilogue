import React from "react";

const AvatarCard = ({ isSelected, onClick }) => (
  <div
    className={`rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform transform hover:scale-105 relative ${
      isSelected ? "border-4 border-green-500" : ""
    }`}
    onClick={onClick}
  >
    <div className="absolute top-2 right-2 flex">
      <button className="bg-gray-200 bg-opacity-75 rounded-full p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-700"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path
            fillRule="evenodd"
            d="M19.077 10a9 9 0 01-2.135 5.342C16.283 17.369 13.237 19 10 19s-6.283-1.631-6.942-3.658A9 9 0 01.923 10c.659-2.027 3.705-3.658 6.942-3.658A9 9 0 0119.077 10zM10 3a7 7 0 00-7 7 7 7 0 007 7 7 7 0 007-7 7 7 0 00-7-7z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
    {isSelected && (
      <div className="absolute top-2 left-2 flex">
        <div className="bg-green-500 rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    )}
  </div>
);

export default AvatarCard;
