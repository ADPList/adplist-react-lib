import React, { Fragment } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import flags from "emoji-flags";

import { handleTimezone } from "../../Utils/helpers";
import Notification from "../../Icons/Notification";
import CloseSquare from "../../Icons/CloseSquare";
import Edit from "../../Icons/Edit";

const Card = ({
  content = {},
  isPrivate = false,
  mutate,
  handleEdit = () => {},
  handleDelete = () => {},
  handleNotify = () => {},
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <div className="session cursor-pointer">
        {content && (
          <Fragment>
            <div className="card__header">
              <p className="font-size-14 mb-0 grey-2-text">
                {handleTimezone(content?.date_and_time, "MMM DD, ha ([GMT] Z)")}
              </p>

              {isPrivate ? (
                <div className="d-flex align-items-center">
                  <a
                    href="/"
                    onClick={(e) =>
                      e.preventDefault() | e.stopPropagation() | handleEdit()
                    }
                    className="mr-3 text-decoration-none"
                  >
                    <Edit color="var(--teal)" size={20} />
                  </a>
                  <a
                    href="/"
                    onClick={(e) =>
                      e.preventDefault() | e.stopPropagation() | handleDelete()
                    }
                    className="text-decoration-none"
                  >
                    <CloseSquare color="var(--grey-2)" size={20} />
                  </a>
                </div>
              ) : (
                <a
                  href="/"
                  onClick={(e) =>
                    e.preventDefault() | e.stopPropagation() | handleNotify()
                  }
                  className="text-decoration-none"
                >
                  <Notification color="var(--black)" />
                </a>
              )}
            </div>
            <div className="card__body">
              <p className="card__body__title">{content.name}</p>
              <p className="card__body__description">{content.description}</p>
            </div>
            <a
              target="mentor"
              className="card__footer"
              onClick={(e) => e.stopPropagation()}
              href={`${process.env.REACT_APP_ADPLIST_URL}/mentors/${content?.mentor?.slug}`}
            >
              <LazyLoadImage
                className="avatar mr-3"
                src={content?.mentor?.profile_photo_url}
              />
              <div className="media-body">
                <p className="font-size-16 font-weight-600 mb-0">
                  {content?.mentor?.name}{" "}
                  {flags.countryCode(content?.mentor?.country_iso).emoji}
                </p>
                <p className="font-size-14 mb-0">
                  {[content?.mentor?.title, content?.mentor?.employer].join(
                    ", ",
                  )}
                </p>
              </div>
            </a>
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
        word-break: break-word;
      }
    }

    .card__footer {
      display: flex;
      margin-top: auto;
      color: var(--black);
      align-items: center;
      text-decoration: none;

      p {
        line-height: 24px;
      }
    }

    &.-skeleton {
      height: 252px;
    }

    .avatar {
      width: 48px;
      height: 48px;
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
    }
  }

  @media (min-width: 768px) {
    .topic {
      width: 380px;
    }
  }
`;

export default Card;
