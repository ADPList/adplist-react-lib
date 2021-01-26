import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
  variant: PropTypes.oneOf(["danger", "success", "warning", "primary"]),
  children: PropTypes.any.isRequired,
  classNames: PropTypes.string,
  size: PropTypes.number,
};

const defaultProps = {
  size: 26,
};

const Badge = ({ variant, children, className, size, ...props }) => {
  /**
   * variables
   */
  variant = (() => {
    switch (variant) {
      case "danger":
        return "danger-bg white-text";
      case "success":
        return "green-bg white-text";
      case "warning":
        return "warning-bg white-text";
      case "primary":
        return "linkedin-blue-bg white-text";
      default:
        break;
    }
  })();

  return (
    <Wrapper className={`${variant} ${className}`} {...{ ...props, size }}>
      {children}
    </Wrapper>
  );
};

/**
 * styles
 */
const Wrapper = styled.span`
  height: ${({ size }) => `${size}px`};
  display: flex;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.6;
  padding-left: 8px;
  border-radius: 6px;
  padding-right: 8px;
  align-items: center;
  justify-content: center;
`;

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
