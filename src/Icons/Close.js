import React from "react";

const Close = (props) => (
  <svg
    width="65"
    height="65"
    viewBox="0 0 65 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="32.5" cy="32.5" r="32.5" fill="#EAEDF0" />
    <path
      d="M39 27L27 39"
      stroke="#0A243F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27 27L39 39"
      stroke="#0A243F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Close;
