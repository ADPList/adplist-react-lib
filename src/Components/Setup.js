import React from "react";
import { Container as C } from "react-bootstrap";

import FadeIn from "react-fade-in";
import styled from "styled-components";

import Steps from "./Steps";
import * as Icon from "../Icons";

/**
 * content styles
 */
const StyledContent = styled.div`
  max-width: ${({ width }) => width || "450px"};
  flex-direction: column;
  margin: 0px auto;
  display: flex;
  width: 100%;

  form {
    .form-group {
      margin-bottom: 24px;
    }

    img {
      max-height: 150px;
      padding: 16px;
    }

    .button {
      justify-content: center;
      margin-top: auto;
      display: flex;

      .btn {
        width: 100%;
      }
    }
  }

  @media (min-width: 768px) {
    form {
      .button {
        margin-top: auto;

        .btn {
          width: auto;
        }
      }
    }
  }
`;

const Container = styled(C)`
  flex-direction: column;
  overflow-y: auto;
  height: 100vh;
  display: flex;
`;

/**
 * wrapper for identity setup
 * @param {*} children - React children
 * @param {*} tab - current tab from url
 * @param {*} steps - array of steps for step nav
 * @param {*} url - url to use to switch the tabs
 */

const Setup = ({
  steps,
  active,
  header,
  children,
  handleBack = () => {},
  handleSwitch = () => {},
  width = "450px",
}) => {
  return (
    <FadeIn>
      <Container className="py-4 py-md-32">
        <div className="d-flex justify-content-between align-items-center mb-32">
          <Icon.Logo />
          <Icon.Close className="cursor-pointer" onClick={() => handleBack()} />
        </div>

        <StyledContent {...{ width }}>
          {header && (
            <p className="mb-24 font-weight-600 font-size-20 text-center">
              {header}
            </p>
          )}
          <Steps
            className="mb-40"
            onClick={handleSwitch}
            activeKey={active?.key || steps[0]?.key}
          >
            {steps.map(({ name }, key) => (
              <Steps.Step title={name} key={key} />
            ))}
          </Steps>
          {children}
        </StyledContent>
      </Container>
    </FadeIn>
  );
};

export default Setup;
