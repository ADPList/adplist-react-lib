import React, { Fragment } from "react";
import { capitalize } from "lodash";

import styled from "styled-components";
import moment from "moment";

import ArrowUpRight from "../Icons/ArrowUpRight";
import Button from "./Button";
import Image from "./Image";
import Flag from "./Flag";

const Profile = ({
  initUser,
  children,
  isEdit = false,
  isPrivate = false,
  handleEdit = () => {},
  handleImage = () => {},
}) => {
  /**
   * variables
   */
  const userType = initUser?.identity_type.toLowerCase();
  const user = ((identity) => {
    switch (identity) {
      case "designer":
        return initUser?.designer;
      case "mentor":
        return initUser?.mentor;
      default:
        return initUser;
    }
  })(userType);

  /**
   * functions
   */
  const handleProfile = () => {
    window.open(user?.portfolio_url);
  };

  return (
    <Wrapper>
      <Preview>
        <div className="preview">
          <Image
            className="mb-32 shadow-sm"
            image={user?.profile_photo_url}
            onChange={(file) => handleImage(file)}
          />
          <div className="mx-auto" style={{ width: 280 }}>
            {userType === "mentor" && (
              <Fragment>
                {!isPrivate && (
                  <Button
                    isValid
                    className="btn--default w-100 btn-56 mb-32"
                    onClick={() => window.open(user?.calendly_url)}
                  >
                    <span className="mr-2">Schedule with Mentor</span>
                    <span role="img" aria-label="writinng">
                      🗓
                    </span>
                  </Button>
                )}
              </Fragment>
            )}
            {user?.portfolio_url && (
              <Button
                isValid
                className="white-bg default-text w-100"
                onClick={() => handleProfile()}
              >
                <span className="mr-2">View my Linkedin profile</span>
                <ArrowUpRight color="var(--default)" />
              </Button>
            )}

            {isEdit && isPrivate && (
              <a
                href="/"
                className="teal-text d-block mt-32"
                onClick={(e) => e.preventDefault() | handleEdit()}
              >
                Edit profile
              </a>
            )}
          </div>
        </div>
      </Preview>
      <Content>
        <div className="user__info">
          <p className="user__info__name font-weight-600 mb-3">
            <span className="mr-2">Hey, I'm {user?.name}</span>
            <Flag label={user?.country?.name} code={user?.country?.iso} />
          </p>

          <p className="font-weight-500 mb-0">
            <span>{user?.title}</span>
            {user?.employer && (
              <span className="default-text font-weight-600">
                {user?.title && (
                  <span className="grey-2-text font-weight-500"> at </span>
                )}
                {user?.employer}
              </span>
            )}
          </p>
          {user?.date_joined && (
            <p className="mb-0 grey-2-text font-size-14 mt-3">
              I joined as a {userType} on{" "}
              {moment(user?.date_joined).format("MMMM DD, YYYY")}
            </p>
          )}
        </div>
        <div className="user__details">
          {user?.bio && (
            <div className="user__details__about mb-4">
              <p className="font-weight-600 mb-2">About</p>
              <p className="line-height-16">{user?.bio}</p>
            </div>
          )}

          {userType === "designer" && user?.looking_for && (
            <div className="user__details__item">
              <span className="prefix">
                <span role="img" aria-label="speaker" className="font-size-16">
                  📣
                </span>
                Looking for
              </span>
              <span className="info">{user?.looking_for}</span>,
            </div>
          )}
          {userType === "mentor" && (
            <div className="user__details__item">
              <span className="prefix">
                <span role="img" aria-label="speaker" className="font-size-16">
                  📣
                </span>
                I'm mentoring
              </span>
              <span className="info">
                {user?.topic_of_interests
                  ?.map((t) => capitalize(t.description))
                  .join(", ")}
              </span>
              ,
            </div>
          )}

          <div className="user__details__item">
            <span className="prefix">
              <span role="img" aria-label="thinking" className="font-size-16">
                💬
              </span>
              I speak
            </span>
            <span className="info">
              {user?.languages?.map((l) => l.description).join(", ")}
            </span>
          </div>

          <div className="user__details__item">
            <span className="prefix">
              <span role="img" aria-label="briefcase" className="font-size-16">
                💼
              </span>
              My expertise is
            </span>
            <span className="info">
              {user?.expertise
                ?.map(({ description }) => description)
                .join(", ") || ""}
            </span>
          </div>
        </div>
      </Content>
      <Children>{children}</Children>
    </Wrapper>
  );
};

export default Profile;

/**
 * styles
 */
const Wrapper = styled.div`
  max-width: 982px;
  margin: 0px auto;

  @media (min-width: 768px) {
    display: grid;
    grid-row-gap: 32px;
    grid-column-gap: 24px;
  }

  @media (min-width: 992px) {
    grid-column-gap: 72px;
    grid-row-gap: 0px;
  }
`;

const Preview = styled.div`
  text-align: center;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
    grid-column-start: 1;
    grid-column-end: 2;
  }

  @media (min-width: 992px) {
    grid-row-start: 1;
    grid-row-end: 3;

    .preview {
      position: sticky;
      top: 136px;
    }
  }
`;

const Content = styled.div`
  margin-bottom: 32px;

  .user__info {
    margin-bottom: 18px;
    padding-bottom: 24px;
    border-bottom: solid 1px var(--grey-4);

    &__name {
      font-size: 28px;
    }
  }

  .user__details {
    &__item {
      margin-bottom: 12px;
      line-height: 25px;

      &:last-child {
        margin-bottom: 0px;
      }

      .prefix {
        color: var(--grey-2);
        white-space: nowrap;
        margin-bottom: 0px;
        font-size: 14px;

        span {
          margin-right: 8px;
        }
      }

      .info {
        text-transform: capitalize;
        margin-bottom: 0px;
        margin-left: 8px;
        font-weight: 500;
      }
    }
  }

  @media (min-width: 768px) {
    grid-column-start: 2;
    grid-column-end: 5;
    margin-bottom: 0px;

    .user__info {
      &__name {
        font-size: 36px;
      }
    }
  }
`;

const Children = styled.div`
  width: 100%;
  grid-column-start: 1;
  grid-row-start: 2;
  grid-column-end: 5;

  @media (min-width: 992px) {
    grid-column-start: 2;
  }
`;
