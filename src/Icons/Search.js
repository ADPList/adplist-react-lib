import React from "react";

const Search = ({ color, ...props }) => (
  <svg
    width="22"
    height="22"
    fill="none"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.7861 19.0254C15.3367 19.0254 19.0257 15.3365 19.0257 10.7859C19.0257 6.23534 15.3367 2.54639 10.7861 2.54639C6.23559 2.54639 2.54663 6.23534 2.54663 10.7859C2.54663 15.3365 6.23559 19.0254 10.7861 19.0254Z"
      stroke={color || "var(--teal)"}
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
    <path
      d="M16.5168 16.9448L19.7472 20.1668"
      stroke={color || "var(--teal)"}
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </svg>
);

export default Search;
