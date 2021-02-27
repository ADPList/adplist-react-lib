import React, { Fragment, useState } from "react";
import styled from "styled-components";

import { Delete } from "../../Icons";
import Notification from "../../Icons/Notification";
import Modal from "./Modal";
import Edit from "../../Icons/Edit";

const Card = ({ content, isPrivate, handleDelete, handleEdit, ...props }) => {
  /**
   * state
   */
  const [modal, showModal] = useState(false);

  return (
    <Wrapper {...props}>
      <Modal show={modal} onHide={() => showModal(false)} />

      <div className="session cursor-pointer">
        {content && (
          <Fragment>
            <div className="card__header">
              <p className="font-size-14 mb-0 grey-2-text">
                {content.date || ""}
              </p>

              {isPrivate ? (
                <div className="d-flex align-items-center">
                  <a
                    href="/"
                    onClick={(e) => e.preventDefault() | handleEdit()}
                    className="mr-2"
                  >
                    <Edit />
                  </a>
                  <a
                    href="/"
                    onClick={(e) => e.preventDefault() | handleDelete()}
                  >
                    <Delete />
                  </a>
                </div>
              ) : (
                <a
                  href="/"
                  className="cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  <Notification color="var(--black)" />
                </a>
              )}
            </div>
            <div className="card__body">
              <p className="card__body__title">{content.title}</p>
              <p className="card__body__description">{content.description}</p>
            </div>
            <div className="card__footer">
              <Avatar src={content.avatar} />
              <div className="media-body px-3">
                <p className="font-size-16 mb-1">{content.author}</p>
                <p className="font-size-14 mb-0">{content.organisation}</p>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Wrapper>
  );
};

/**
 * styles
 */
const Wrapper = styled.div`
  .session {
    height: 100%;
    width: ${({ width }) => width || 330}px;
    display: flex;
    padding: 1.5rem;
    border-radius: 12px;
    flex-direction: column;
    border: solid 1px var(--grey-3);

    .card__header {
      display: flex;
      margin-bottom: 1rem;
      align-items: center;
      justify-content: space-between;
    }

    .card__body {
      margin-bottom: 24px;

      &__title {
        font-size: 19px;
        font-weight: 600;
        line-height: 1.3;
        margin-bottom: 8px;
      }

      &__description {
        line-height: 1.5;
        margin-bottom: 0px;
      }
    }

    .card__footer {
      display: flex;
      margin-top: auto;
    }

    &.-skeleton {
      height: 252px;
    }
  }

  @media (min-width: 768px) {
    .topic {
      width: 380px;
    }
  }
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

export default Card;
