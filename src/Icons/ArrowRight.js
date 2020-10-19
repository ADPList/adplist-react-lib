import React from "react";

const ArrowRight = ({ color, ...props }) => {
  return (
    <svg
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M7.53242 12.2981H17.3123"
          stroke={color || "#788A9C"}
          strokeWidth="1.38308"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.4224 7.4082L17.3123 12.2981L12.4224 17.1881"
          stroke={color || "#788A9C"}
          strokeWidth="1.38308"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="16.597"
            height="16.597"
            fill="white"
            transform="translate(12.4229 0.5625) rotate(45)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowRight;
