import React from "react";
import styled from "styled-components";

import Button from "./Button";
import NotFound from "../Icons/NotFound";

const PageNotFound = ({ route }) => {
  return (
    <Wrapper>
      <NotFound className="icon" />
      <h1>Looks like you are lost.</h1>
      <p>
        We can’t seem to find the page you are looking for. We will help you
        back to the homepage now
      </p>

      <Button
        isValid
        className="btn--default px-5 mx-auto"
        onClick={() => route(process.env.REACT_APP_ADPLIST_URL)}
      >
        Back to homepage
      </Button>
    </Wrapper>
  );
};

/**
 * style
 */
const Wrapper = styled.div`
  max-width: 450px;
  margin-left: auto;
  padding-top: 48px;
  margin-right: auto;
  text-align: center;
  padding-bottom: 48px;

  .icon {
    margin-bottom: 32px;
  }

  h1 {
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
    margin-bottom: 8px;
  }

  p {
    line-height: 1.6;
    margin-bottom: 32px;
  }

  @media (min-width: 992px) {
    padding-top: 144px;
    padding-bottom: 144px;

    .icon {
      margin-bottom: 48px;
    }

    p {
      margin-bottom: 48px;
    }
  }
`;

export default PageNotFound;
