import React, { Fragment } from "reactn";
import { capitalize, startCase } from "lodash";
import moment from "moment";
import styled from "styled-components";

import { converter } from "../Utils";
import Thumbnail from "./Profile/Thumbnail";
import Banner from "./Profile/Mentor/Banner";
import Flag from "./Flag";
import Metrics from "./Profile/Metrics";

const Profile = ({
  url,
  children,
  initUser,
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
    <Fragment>
      <Wrapper className="mx-auto">
        {/* profile image preview */}
        <Thumbnail
          {...{
            url,
            user,
            isEdit,
            userType,
            isPrivate,
            handleEdit,
            handleImage,
            loggedInUser: initUser,
          }}
        />

        <Content>
          <div className="user__info">
            <p className="user__info__name font-weight-600 mb-3">
              <span className="mr-2">Hi, I’m {user?.name}</span>
              <Flag label="Ghana" code="GH" />
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
                <div
                  className="line-height-16"
                  dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(user?.bio),
                  }}
                />
              </div>
            )}

            {userType === "designer" &&
              user?.looking_for &&
              user?.open_to_work && (
                <div className="user__details__item">
                  <span
                    role="img"
                    aria-label="speaker"
                    className="font-size-16"
                  >
                    📣
                  </span>
                  <span className="info">
                    <span className="info__prefix">Looking for</span>
                    <span className="info__content">
                      {capitalize(user?.looking_for)}
                    </span>
                  </span>
                </div>
              )}
            {userType === "mentor" && (
              <div className="user__details__item">
                <span role="img" aria-label="speaker" className="font-size-16">
                  📣
                </span>
                <span className="info">
                  <span className="info__prefix">I'm mentoring</span>
                  <span className="info__content">
                    {user?.topic_of_interests
                      ?.map((t) => capitalize(t.description))
                      .join(", ")}
                  </span>
                </span>
              </div>
            )}

            <div className="user__details__item">
              <span role="img" aria-label="thinking" className="font-size-16">
                💬
              </span>
              <span className="info">
                <span className="info__prefix">I speak</span>
                <span className="info__content">
                  {user?.languages?.map((l) => l.description).join(", ")}
                </span>
              </span>
            </div>

            <div className="user__details__item">
              <span role="img" aria-label="briefcase" className="font-size-16">
                💼
              </span>
              <span className="info">
                <span className="info__prefix">My expertise is</span>
                <span className="info__content">
                  {user?.expertise
                    ?.map(({ description }) => description)
                    .join(", ") || ""}
                </span>
              </span>
            </div>
          </div>
          <Banner {...{ isPrivate, userType, user }} />
        </Content>
        <Children>{children}</Children>
      </Wrapper>
    </Fragment>
  );
};

/**
 * styles
 */
const Wrapper = styled.div`
  max-width: 450px;

  @media (min-width: 768px) {
    display: grid;
    grid-auto-flow: row;
    align-items: center;
    justify-items: center;
  }
`;

const Content = styled.div`
  .user__info {
    text-align: center;

    &__name {
      font-size: 32px;
      line-height: 36px;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 0px;

    .user__info {
    }
  }
`;

// const Content = styled.div`
//   margin-bottom: 32px;

//   .user__info {
//     margin-bottom: 18px;
//     padding-bottom: 24px;
//     border-bottom: solid 1px var(--grey-4);

//     &__name {
//       font-size: 28px;
//     }
//   }

//   // .user__details {
//   //   &__item {
//   //     grid-template-columns: 18px auto;
//   //     margin-bottom: 12px;
//   //     line-height: 20px;
//   //     display: grid;
//   //     gap: 8px;

//   //     &:last-child {
//   //       margin-bottom: 0px;
//   //     }

//   //     .info {
//   //       &__prefix {
//   //         color: var(--grey-2);
//   //         white-space: nowrap;
//   //         margin-bottom: 0px;
//   //         margin-right: 6px;
//   //         font-size: 14px;
//   //       }

//   //       &__content {
//   //         text-transform: capitalize;
//   //         margin-bottom: 0px;
//   //         font-weight: 500;
//   //       }
//   //     }
//   //   }
//   // }

//   // @media (min-width: 768px) {
//   //   grid-column-start: 2;
//   //   grid-column-end: 5;
//   //   margin-bottom: 0px;

//   //   .user__info {
//   //     &__name {
//   //       font-size: 36px;
//   //     }
//   //   }
//   // }
// `;

const Children = styled.div`
  width: 100%;
  @media (min-width: 992px) {
  }
`;

export default Profile;
