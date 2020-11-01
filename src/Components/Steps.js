import React, { Children, cloneElement, Fragment } from "react";
import styled, { css } from "styled-components";

const Step = ({ title, active, completed, onClick, index, ...props }) => {
  return (
    <StyledStep
      {...props}
      {...{ active, completed }}
      onClick={() => onClick && onClick(index + 1)}
    >
      <Bar />
      <Title>{title}</Title>
    </StyledStep>
  );
};

const Steps = ({ children, activeKey, history, onClick, ...props }) => {
  const filteredChildren = React.Children.toArray(children).filter((c) => !!c);

  let childProps = {};

  activeKey = activeKey ? activeKey - 1 : 0;

  return (
    <Fragment>
      <StyledSteps {...props}>
        {Children.map(filteredChildren, (child, index) => {
          if (!child) {
            return null;
          }

          childProps = {
            ...child.props,
            step: 0,
            index: index,
            onClick: onClick,
            history: history,
            width: (100 / filteredChildren.length).toFixed(2),
          };

          if (index === activeKey) {
            childProps.active = true;
          }

          if (activeKey > index) {
            childProps.completed = true;
          }

          if (filteredChildren.length - 1 === index) {
            childProps.isLast = true;
          }

          delete childProps?.component;

          return cloneElement(child, { ...childProps });
        })}
      </StyledSteps>
    </Fragment>
  );
};

Steps.Step = Step;
export default Steps;

/**
 * styles
 */
const StyledSteps = styled.div`
  align-items: center;
  overflow-y: hidden;
  flex-wrap: nowrap;
  overflow-x: auto;
  display: flex;

  margin-right: -8px;
  margin-left: -8px;

  &::-webkit-scrollbar {
    display: none;
    height: 0px;
    width: 0px;
  }
`;

const Bar = styled.div`
  background-color: var(--grey-4);
  border-radius: 40px;
  margin-bottom: 8px;
  width: 140px;
  height: 5px;
`;

const Title = styled.div`
  color: var(--grey-2);
  font-size: 14px;
  margin: 0px;
`;

const StyledStep = styled.div`
  padding-bottom: 2px;
  padding-right: 8px;
  padding-left: 8px;
  cursor: pointer;

  ${Bar} {
    ${({ completed }) =>
      completed &&
      css`
        background-color: var(--teal);
      `}

    ${({ active }) =>
      active &&
      css`
        background-color: var(--default);
      `}
  }

  ${Title} {
    ${({ completed }) =>
      completed &&
      css`
        color: var(--teal);
      `}

    ${({ active }) =>
      active &&
      css`
        color: var(--default);
      `}
  }
`;
