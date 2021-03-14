import React, { Fragment } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import flags from "emoji-flags";

import { handleTimezone, userRoute } from "../../Utils/helpers";
import Notification from "../../Icons/Notification";
import CloseSquare from "../../Icons/CloseSquare";
import Badge from "../../Components/Badge";
import Edit from "../../Icons/Edit";

const Card = ({
  mutate,
  content = {},
  isPrivate = false,
  handleEdit = () => {},
  handleDelete = () => {},
  handleNotify = () => {},
  ...props
}) => {
  const full = content?.booked_seats === content?.rsvp_limit;

  return (
    <Wrapper {...props}>
      <div className="session cursor-pointer">
        {content && (
          <Fragment>
            <div className="card__header">
              <p className="font-size-14 mb-0 grey-2-text">
                {handleTimezone(content?.date_and_time, "MMM DD, ha ([GMT] Z)")}
              </p>

              {!isPrivate ? (
                <Fragment>
                  {content?.user_in_rsvp ? (
                    <Badge className="muted-green-bg teal-text">
                      You’re In
                    </Badge>
                  ) : (
                    <Fragment>
                      {full && (
                        <Badge className="grey-3-bg grey-2-text">Full</Badge>
                      )}

                      {!full && (
                        <a
                          href="/"
                          onClick={(e) =>
                            e.preventDefault() |
                            e.stopPropagation() |
                            handleNotify()
                          }
                          className="text-decoration-none"
                        >
                          <Notification color="var(--black)" />
                        </a>
                      )}
                    </Fragment>
                  )}
                </Fragment>
              ) : (
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
              href={`${process.env.REACT_APP_ADPLIST_URL}/${userRoute(
                process.env.REACT_APP_MENTOR,
              )}/${content[process.env.REACT_APP_MENTOR]?.slug}`}
            >
              <LazyLoadImage
                className="avatar mr-3"
                src={content[process.env.REACT_APP_MENTOR]?.profile_photo_url}
              />
              <div className="media-body">
                <p className="font-size-16 font-weight-600 mb-0">
                  {content[process.env.REACT_APP_MENTOR]?.name}{" "}
                  {
                    flags.countryCode(
                      content[process.env.REACT_APP_MENTOR]?.country_iso,
                    ).emoji
                  }
                </p>
                <p className="font-size-14 mb-0">
                  {[
                    content[process.env.REACT_APP_MENTOR]?.title,
                    content[process.env.REACT_APP_MENTOR]?.employer,
                  ].join(", ")}
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
