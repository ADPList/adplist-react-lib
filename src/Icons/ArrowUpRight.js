import React from "react";

const ArrowUpRight = ({ color, ...props }) => (
  <svg
    width="15"
    height="15"
    fill="none"
    viewBox="0 0 15 15"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color || "#00C4C4"}
      d="M4.375 10.625L10.625 4.375"
    />
    <path
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color || "#00C4C4"}
      d="M4.375 4.375H10.625V10.625"
    />
  </svg>
);

export default ArrowUpRight;
