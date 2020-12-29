import React, { Fragment, useState, useGlobal } from "reactn";
import styled from "styled-components";
import { updateBannerStatusService } from "../../../Services/profileService";

import Button from "../../Button";

const Banner = ({ isPrivate, userType, user }) => {
  /**
   * states
   */
  const [loggedInUser, setUser] = useGlobal("user");
  const [loadingShare, setLoadingShare] = useState(false);

  /**
   * functions
   */
  const handleShareLinkedIn = () => {
    setLoadingShare(true);

    updateBannerStatusService(user.id, { shared_on_linkedin: true }).then(
      () =>
        handleUpdate({ shared_on_linkedin: true }) |
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${process.env.REACT_APP_ADPLIST_URL}/mentors/${user.slug}`,
        ),
    );
  };

  const handleJoinSlack = () => {
    updateBannerStatusService(user.id, { joined_slack: true }).then(
      () =>
        handleUpdate({ joined_slack: true }) |
        window.open(
          "https://join.slack.com/t/amazing-design-list/shared_invite/zt-jt9k2gc3-E1ZMPuEifAbLUNjehx3QXw",
        ),
    );
  };

  const handleFullSetup = () => {
    updateBannerStatusService(user.id, { fully_setup: true }).then(() =>
      handleUpdate({ fully_setup: true }),
    );
  };

  const handleUpdate = (payload) => {
    setUser({
      ...loggedInUser,
      mentor: { ...loggedInUser.mentor, ...payload },
    });
  };

  return (
    <Fragment>
      {isPrivate && userType === "mentor" && !user?.fully_setup && (
        <Wrapper>
          <div className="header">
            <span role="img" aria-label="rocket">
              🚀
            </span>
            <span className="mr-auto ml-2">Be a power mentor on ADPList</span>
            {/* {user?.date_verified && ( */}
            <a
              href="/"
              className="header__close my-auto text-decoration-none"
              onClick={(e) => e.preventDefault() | handleFullSetup()}
            >
              <i className="material-icons-round">close</i>
            </a>
            {/* )} */}
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
                {" Verify your email"}
              </p>
            </div>
            <div className={`item ${user?.date_verified && "complete"}`}>
              <div className="check">
                <i className="material-icons">check</i>
              </div>
              <p>
                <span role="img" aria-label="hurray">
                  🎉
                </span>
                {" Mentor profile approved!"}
              </p>
            </div>
            <div
              className={`item align-items-start ${
                user?.shared_on_linkedin
                  ? "complete"
                  : !user?.date_verified && "disabled"
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
                  When you share with your LinkedIn network, more designers can
                  get access to free quality mentorships globally.
                </span>
                <Button
                  loading={loadingShare}
                  onClick={handleShareLinkedIn}
                  isValid={!!user?.date_verified}
                  className="teal-bg white-text teal-border btn-48 mt-3"
                >
                  Share on LinkedIn
                </Button>
              </div>
            </div>
            <div
              className={`item align-items-start align-items-md-center ${
                user?.joined_slack
                  ? "complete"
                  : !user?.date_verified && "disabled"
              }`}
            >
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
                  onClick={() => user?.date_verified && handleJoinSlack()}
                >
                  Join here
                </span>
              </p>
            </div>
          </div>
        </Wrapper>
      )}
    </Fragment>
  );
};

/**
 * styles
 */
const green = "#30d158";
const Wrapper = styled.div`
  margin-top: 1.5rem;
  border-radius: 18px;
  padding: 1.5rem 1rem;
  background-color: var(--grey-3);

  .header {
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    padding-bottom: 20px;
    align-items: center;
    font-weight: bold;
    line-height: 1.3;
    font-size: 16px;

    display: flex;
    justify-content: space-between;

    &__close {
      width: 32px;
      height: 32px;
      display: flex;
      border-radius: 50%;
      text-decoration: none;
      background-color: var(--grey-4);

      i {
        margin: auto;
        font-size: 16px;
      }
    }
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

        i {
          font-size: 16px;
        }
      }

      p {
        font-size: 16px;
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

    .header {
      font-size: 24px;

      &__close {
        width: 48px;
        height: 48px;

        i {
          font-size: 24px;
        }
      }
    }

    .content {
      .item {
        .check {
          width: 40px;
          height: 40px;
          flex: 0 0 40px;

          i {
            font-size: 24px;
          }
        }
      }
    }
  }
`;

export default Banner;
