import React, { Fragment, useRef } from "react";
import { Button as Btn } from "react-bootstrap";
import Img from "../Icons/Image";

import styled from "styled-components";

const Image = ({ button, className, onChange, image, ...props }) => {
  let imgRef = useRef(null);

  return (
    <StyleImageContainer
      className={className + ` ${image ? "" : "grey-2-bg"}`}
      {...(image && { image })}
      {...props}
    >
      {button && (
        <Fragment>
          <Button
            className={`btn-48 white-bg default-text white-border shadow-sm ${button?.className}`}
            onClick={() => imgRef.click()}
          >
            <Fragment>
              <Img className="mr-2" />
              <span>{button?.value}</span>
            </Fragment>
          </Button>

          <input
            type="file"
            accept="image/*"
            className="d-none"
            ref={(ref) => (imgRef = ref)}
            onChange={({ currentTarget: { files } }) => onChange(files[0])}
          />
        </Fragment>
      )}
    </StyleImageContainer>
  );
};

export default Image;

/**
 * styles
 */
const Button = styled(Btn)``;
const StyleImageContainer = styled.div`
  justify-content: center;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  margin: 0px auto;
  height: 368px;
  display: flex;
  width: 280px;

  ${({ image }) =>
    image &&
    `
      background-image: url(${image});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    `}

  ${Button} {
    position: absolute;
    margin: 0px auto;
    font-size: 12px;
    bottom: 16px;
  }
  ${({ sticky }) =>
    sticky &&
    `
      @media (min-width: 992px) {
        position: sticky;
        top: 118px;
      }
    `}
`;
