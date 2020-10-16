import React, { Fragment } from "react";
import { capitalize } from "lodash";
import styled from "styled-components";

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

  return (
    <Wrapper>
      <Preview>
        <Image
          className="mb-32"
          image={user?.profile_photo_url}
          onChange={(file) => handleImage(file)}
        />
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
          <a
            href={user?.portfolio_url}
            target="profile"
            className="default-text"
          >
            View my Profile
          </a>
        )}

        {isEdit && isPrivate && (
          <a
            href="/"
            className="teal-text d-block mt-5"
            onClick={(e) => e.preventDefault() | handleEdit()}
          >
            Edit profile
          </a>
        )}
      </Preview>
      <Content>
        <div className="user__info">
          <p className="font-size-28 font-size-md-36 font-weight-600">
            <span className="mr-2">Hello, {user?.name}</span>
            <Flag label={user?.country?.name} code={user?.country?.iso} />
          </p>

          <p className="font-weight-500 mb-0">
            <span>
              {user?.expertise
                ?.map(({ description }) => description)
                .join(", ") || ""}
            </span>
            {user?.employer && (
              <span className="blue-text">, {user?.employer}</span>
            )}
          </p>
        </div>
        <div className="user__details">
          {userType === "designer" && user?.looking_for && (
            <div className="user__details__item">
              <p className="prefix">️📣 Looking for</p>
              <p className="info">{user?.looking_for}</p>
            </div>
          )}
          {userType === "mentor" && (
            <div className="user__details__item">
              <p className="prefix">📣 I'm mentoring</p>
              <p className="info">
                {user?.topic_of_interests
                  ?.map((t) => capitalize(t.description))
                  .join(", ")}
              </p>
            </div>
          )}

          <div className="user__details__item">
            <p className="prefix">💬 I speak</p>
            <p className="info">
              {user?.languages?.map((l) => l.description).join(", ")}
            </p>
          </div>

          <div className="user__details__item">
            <p className="prefix">💼 My expertise is</p>
            <p className="info">
              {user?.expertise
                ?.map(({ description }) => description)
                .join(", ") || ""}
            </p>
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
    grid-row-gap: 42px;
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
    position: sticky;
    top: 118px;
  }
`;

const Content = styled.div`
  margin-bottom: 32px;

  .user__info {
    margin-bottom: 18px;
    padding-bottom: 24px;
    border-bottom: solid 1px var(--grey-4);
  }

  .user__details {
    &__item {
      margin-bottom: 12px;
      line-height: 25px;
      display: flex;

      &:last-child {
        margin-bottom: 0px;
      }

      .prefix {
        color: var(--grey-2);
        margin-bottom: 0px;
        margin-right: 4px;
        font-size: 14px;
      }

      .info {
        text-transform: capitalize;
        margin-bottom: 0px;
        font-weight: 500;
      }
    }
  }

  @media (min-width: 768px) {
    grid-column-start: 2;
    grid-column-end: 5;
    margin-bottom: 0px;

    .user__info {
      padding-bottom: 36px;
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
