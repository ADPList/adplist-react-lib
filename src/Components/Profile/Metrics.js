import React from "react";
import { Fragment } from "react";
import styled from "styled-components";

const Metrics = ({ metrics, ...props }) => {
  return (
    <Fragment {...props}>
      {metrics && (
        <Wrapper>
          <div className="card__content">
            {metrics.icon}
            <div>
              <p className="font-size-18 font-weight-600 mb-0">
                {metrics.metric}
              </p>
              <p className="font-size-14 grey-2-text mb-0">
                {metrics.description}
              </p>
            </div>
          </div>
        </Wrapper>
      )}
    </Fragment>
  );
};

const Wrapper = styled.div`
  border-radius: 8px;
  padding: 8px;
  border: solid 1px var(--grey-3);

  .card__content {
    display: flex;
    margin-top: auto;
    color: var(--black);

    p {
      line-height: 24px;
    }
  }
`;

export default Metrics;
