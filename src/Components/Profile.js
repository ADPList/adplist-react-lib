import React, { Fragment, useState, useGlobal } from "reactn";
import { capitalize } from "lodash";

import styled from "styled-components";
import moment from "moment";

import ScheduleWithCalendly from "./Profile/ScheduleWithCalendly";
import ScheduleWithEmail from "./Profile/ScheduleWithEmail";
import ArrowUpRight from "../Icons/ArrowUpRight";
import Confirm from "./Confirm";
import Button from "./Button";
import Image from "./Image";
import Flag from "./Flag";
import Moon from "../Icons/Moon";

const Profile = ({
  initUser,
  children,
  isEdit = false,
  isPrivate = false,
  handleEdit = () => {},
  handleImage = () => {},
}) => {
  /**
   * state
   */
  const [loggedInUser] = useGlobal("user");
  const [scheduleWithEmail, setScheduleWithEmail] = useState(false);
  const [scheduleWithCalendly, setScheduleWithCalendly] = useState(false);

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

  const handleScheduling = async () => {
    if (!loggedInUser) {
      if (
        await Confirm({
          confirmation: "You need to login to schedule with mentor",
          buttons: { proceed: { value: "Login" } },
        })
      ) {
        window.open(process.env.REACT_APP_AUTH_URL + "/login?app=adplist");
      }

      return false;
    }

    if (loggedInUser?.mentor?.id === user?.id) {
      if (
        await Confirm({
          confirmation: "Cannot schedule with yourself",
          buttons: {
            cancel: { className: "d-none" },
            proceed: { value: "Ok" },
          },
        })
      ) {
      }
      return false;
    }

    if (user?.calendly_url) {
      setScheduleWithCalendly(true);
    } else {
      setScheduleWithEmail(true);
    }
  };

  return (
    <Fragment>
      {isPrivate && userType === "mentor" && !user?.date_verified && (
        <Alert>Your mentor account is pending approval</Alert>
      )}
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
                  {!user?.on_break ? (
                    <Fragment>
                      {!isPrivate && (
                        <Button
                          isValid
                          className="btn--default w-100 btn-56 mb-32"
                          onClick={() => handleScheduling()}
                        >
                          <span className="mr-2">
                            {user?.calendly_url
                              ? "Schedule with Mentor"
                              : "Send me a email"}
                          </span>
                          {user?.calendly_url ? (
                            <span role="img" aria-label="writinng">
                              🗓
                            </span>
                          ) : (
                            <span role="img" aria-label="email">
                              📨
                            </span>
                          )}
                        </Button>
                      )}
                    </Fragment>
                  ) : (
                    <Button
                      isValid
                      className="pale-peach-bg w-100 btn-64 mb-32"
                    >
                      <Moon />
                      <span className="ml-3">I’m currently on a break</span>
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

            {userType === "designer" &&
              user?.looking_for &&
              user?.open_to_work && (
                <div className="user__details__item">
                  <span className="prefix">
                    <span
                      role="img"
                      aria-label="speaker"
                      className="font-size-16"
                    >
                      📣
                    </span>
                    Looking for
                  </span>
                  <span className="info">{capitalize(user?.looking_for)}</span>
                </div>
              )}
            {userType === "mentor" && (
              <div className="user__details__item">
                <span className="prefix">
                  <span
                    role="img"
                    aria-label="speaker"
                    className="font-size-16"
                  >
                    📣
                  </span>
                  I'm mentoring
                </span>
                <span className="info">
                  {user?.topic_of_interests
                    ?.map((t) => capitalize(t.description))
                    .join(", ")}
                </span>
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
                <span
                  role="img"
                  aria-label="briefcase"
                  className="font-size-16"
                >
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

          {isPrivate && (
            <Banner>
              <div className="header">
                <span role="img" aria-label="rocket">
                  🚀
                </span>
                {" Be a power mentor on ADPList"}
              </div>
              <div className="content">
                <div className="item complete">
                  <div className="check">
                    <i className="material-icons">check</i>
                  </div>
                  <p>
                    <span role="img" aria-label="mail">
                      📧
                    </span>
                    {"  Verify your email"}
                  </p>
                </div>
                <div className={`item ${user?.date_verified && "complete"}`}>
                  <div className="check">
                    <i className="material-icons">check</i>
                  </div>
                  <p>
                    <span role="img" aria-label="hurray">
                      🎉
                    </span>{" "}
                    {" Mentor profile approved!"}
                  </p>
                </div>
                <div
                  className={`item align-items-start ${
                    !user?.date_verified && "disabled"
                  }`}
                >
                  <div className="check">
                    <i className="material-icons">check</i>
                  </div>
                  <div>
                    <p className="mb-1">
                      <span role="img" aria-label="unicorn">
                        🦄
                      </span>
                      {" Share with your network - You’re a verified mentor!"}
                    </p>
                    <span className="font-size-14 line-height-16 grey-2-text d-block">
                      When you share with your LinkedIn network, more designers
                      can get access to free quality mentorships globally.
                    </span>
                    {/* <Button
                      onClick={() =>
                        window.open(
                          `https://www.linkedin.com/sharing/share-offsite/?url=${process.env.REACT_APP_ADPLIST_URL}/mentors/${user.slug}`,
                        )
                      }
                      isValid={!!user?.date_verified}
                      className="teal-bg white-text teal-border btn-48 mt-3"
                    >
                      Share on LinkedIn
                    </Button> */}
                  </div>
                </div>
                <div className={`item ${!user?.date_verified && "disabled"}`}>
                  <div className="check">
                    <i className="material-icons">check</i>
                  </div>
                  <p>
                    <span role="img" aria-label="wave">
                      👋
                    </span>{" "}
                    Join Mentor Club Slack Network -{" "}
                    <span
                      className="green cursor-pointer"
                      onClick={() =>
                        user?.date_verified &&
                        window.open(
                          "https://join.slack.com/t/amazing-design-list/shared_invite/zt-jt9k2gc3-E1ZMPuEifAbLUNjehx3QXw",
                        )
                      }
                    >
                      Join here
                    </span>
                  </p>
                </div>
              </div>
            </Banner>
          )}
        </Content>
        <Children>{children}</Children>
      </Wrapper>

      <ScheduleWithCalendly
        modal={scheduleWithCalendly}
        setModal={setScheduleWithCalendly}
        user={user}
      />

      <ScheduleWithEmail
        modal={scheduleWithEmail}
        setModal={setScheduleWithEmail}
        user={user}
      />
    </Fragment>
  );
};

/**
 * styles
 */
const Alert = styled.div`
  background-color: #fdbc7d;
  margin-bottom: 32px;
  text-align: center;
  line-height: 1.6;
  font-size: 18px;
  padding: 16px;
  color: #fff;
`;

const Wrapper = styled.div`
  max-width: 982px;
  margin: 0px auto;
  padding-left: 15px;
  padding-right: 15px;

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
      top: 118px;
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

const green = "#30d158";
const Banner = styled.div`
  margin-top: 1.5rem;
  border-radius: 18px;
  padding: 1.5rem 1rem;
  background-color: var(--grey-3);

  .header {
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    padding-bottom: 20px;
    font-weight: bold;
    font-size: 24px;
  }
  .content {
    padding-top: 1.5rem;
    display: grid;
    row-gap: 24px;

    .item {
      display: flex;
      align-items: center;

      .green {
        color: ${green};
      }

      .check {
        width: 20px;
        height: 20px;
        display: flex;
        flex: 0 0 20px;
        color: transparent;
        border-radius: 50%;
        margin-right: 1rem;
        align-items: center;
        justify-content: center;
        border: solid 1px var(--grey-2);
      }

      p {
        font-size: 18px;
        line-height: 1.6;
        font-weight: 500;
        margin-bottom: 0px;
      }

      &.complete {
        .check {
          background-color: ${green};
          border-color: ${green};
          color: #fff;
        }
      }
      &.disabled {
        opacity: 0.3;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 1.5rem 2rem;

    .content {
      .item {
        .check {
          width: 40px;
          height: 40px;
          flex: 0 0 40px;
        }
      }
    }
  }
`;

Profile.Alert = Alert;

export default Profile;
