import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

const defaultProps = {
  size: 24,
  color: "var(--black)",
};

const LinkedIn = ({ size, variant, color, ...props }) => (
  <svg
    fill="none"
    width={size + 1}
    height={size}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.7759 0C6.14948 0 0.775879 5.3736 0.775879 12C0.775879 18.6264 6.14948 24 12.7759 24C19.4023 24 24.7759 18.6264 24.7759 12C24.7759 5.3736 19.4023 0 12.7759 0ZM9.28882 18.1406H6.36627V9.34808H9.28882V18.1406ZM7.82764 8.14746H7.80859C6.82788 8.14746 6.1936 7.47235 6.1936 6.6286C6.1936 5.76581 6.84729 5.10938 7.84705 5.10938C8.8468 5.10938 9.46204 5.76581 9.48108 6.6286C9.48108 7.47235 8.8468 8.14746 7.82764 8.14746ZM19.8269 18.1406H16.9047V13.4368C16.9047 12.2547 16.4816 11.4485 15.4241 11.4485C14.6168 11.4485 14.136 11.9923 13.9247 12.5173C13.8474 12.7051 13.8286 12.9677 13.8286 13.2305V18.1406H10.9062C10.9062 18.1406 10.9445 10.173 10.9062 9.34808H13.8286V10.593C14.2169 9.9939 14.9118 9.14172 16.4623 9.14172C18.3851 9.14172 19.8269 10.3984 19.8269 13.099V18.1406Z"
      fill={color}
    />
  </svg>
);

LinkedIn.propTypes = propTypes;
LinkedIn.defaultProps = defaultProps;

export default LinkedIn;
