import React, { useState, useGlobal } from "reactn";
import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

import { handleShare, handleLogin } from "../../Utils/helpers";
import ScheduleWithCalendly from "./Mentor/ScheduleWithCalendly";
import ScheduleWithEmail from "./Mentor/ScheduleWithEmail";
import copyToClipboard from "../../Utils/copyToClipboard";
import ReportProfile from "./Mentor/ReportProfile";
import AskAQuestion from "./Mentor/AskAQuestion";
import Confirm from "../Confirm";
import Button from "../Button";
import Image from "../Image";
import Grid from "../../Styles/Grid";

import MessageSquare from "../../Icons/MessageSquare";
import ArrowUpRight from "../../Icons/ArrowRight";
import Linkedin from "../../Icons/LinkedIn";
import Twitter from "../../Icons/Twitter";
import Shield from "../../Icons/Shield";
import Copy from "../../Icons/Copy";
import Moon from "../../Icons/Moon";

const Thumbnail = ({
  url,
  user,
  isEdit,
  userType,
  isPrivate,
  handleEdit,
  handleImage,
}) => {
  /**
   * variable
   */
  url = `${url}/${userType}s/${user?.slug}`;

  /**
   * states
   */
  const [loggedInUser] = useGlobal("user");
  const [report, setReport] = useState(false);
  const [askQuestion, setAskQuestion] = useState(false);
  const [scheduleWithEmail, setScheduleWithEmail] = useState(false);
  const [scheduleWithCalendly, setScheduleWithCalendly] = useState(false);

  /**
   * functions
   */

  const handleProfile = () => {
    window.open(user?.portfolio_url);
  };

  const handleScheduling = async () => {
    handleLogin(loggedInUser, "You need to login to schedule with mentor")
      .then(async () => {
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
      })
      .catch(() => {
        return false;
      });
  };

  const handleAskQuestion = async () => {
    handleLogin(loggedInUser, "You need to login to ask a question").then(
      async () => {
        if (loggedInUser?.mentor?.id === user?.id) {
          if (
            await Confirm({
              confirmation: "Cannot ask yourself a question",
              buttons: {
                cancel: { className: "d-none" },
                proceed: { value: "Ok" },
              },
            })
          ) {
          }
          return false;
        }

        return setAskQuestion(true);
      },
    );
  };

  return (
    <React.Fragment>
      <Wrapper>
        <div className="preview">
          <Image
            className="mb-4 shadow-sm"
            image={user?.profile_photo_url}
            onChange={(file) => handleImage(file)}
          />
          <Grid className="mx-auto" gap="16px">
            {isPrivate && user?.date_verified && (
              <div>
                <label className="text-left grey-2-text mb-2">
                  Your public profile
                </label>
                <Grid
                  className="grey-4-bg rounded py-12 px-3 align-items-center"
                  sm="calc(100% - 40px) 24px"
                  gap="16px"
                >
                  <a className="text-truncate teal-text" href={url}>
                    {url}
                  </a>
                  <Copy
                    className="cursor-pointer"
                    onClick={() => copyToClipboard(url)}
                  />
                </Grid>
              </div>
            )}
            {userType === "mentor" && (
              <React.Fragment>
                {!user?.on_break ? (
                  <React.Fragment>
                    {!isPrivate && loggedInUser?.mentor?.id !== user?.id && (
                      <React.Fragment>
                        {user?.calendly_url ? (
                          <Grid sm="minmax(0, 1fr) 58px 58px" gap="8px">
                            <Button
                              isValid
                              onClick={handleScheduling}
                              className="btn--default w-100 btn-56"
                            >
                              Schedule a call
                            </Button>
                            <Action onClick={handleAskQuestion}>
                              <MessageSquare />
                            </Action>
                            <ProfileDropdown
                              {...{ user, isPrivate, loggedInUser, setReport }}
                            />
                          </Grid>
                        ) : (
                          <Grid sm="1fr 58px" gap="8px">
                            <Button
                              isValid
                              onClick={handleAskQuestion}
                              className="btn--default w-100 btn-56"
                            >
                              Ask a question
                            </Button>
                            <ProfileDropdown
                              {...{ user, isPrivate, loggedInUser, setReport }}
                            />
                          </Grid>
                        )}
                      </React.Fragment>
                    )}
                  </React.Fragment>
                ) : (
                  <Button isValid className="pale-peach-bg w-100 btn-56">
                    <Moon />
                    <span className="ml-3">I’m currently on a break</span>
                  </Button>
                )}
              </React.Fragment>
            )}

            {user?.portfolio_url && !isPrivate && (
              <Button
                isValid
                className="muted-grey-bg default-text w-100 btn-56"
                onClick={() => handleProfile()}
              >
                <span className="mr-2">View my LinkedIn</span>
                <ArrowUpRight color="var(--default)" />
              </Button>
            )}

            {userType === "mentor" && (
              <NoShow>
                <Shield className="mr-2" />
                <p className="line-height-16 font-size-14 mb-0">
                  No-Show Ban Policy{" "}
                  <a
                    target="notion"
                    className="teal-text"
                    href="https://www.notion.so/adplist/No-Show-Ban-Policy-ac9b11bd05c649a2867e534d66c49fa4"
                  >
                    Read more
                  </a>
                </p>
              </NoShow>
            )}

            {isEdit && isPrivate && (
              <a
                href="/"
                className="teal-text d-block py-2"
                onClick={(e) => e.preventDefault() | handleEdit()}
              >
                Edit profile
              </a>
            )}
          </Grid>
        </div>
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

      <ReportProfile
        modal={report}
        setModal={setReport}
        {...{ user, userType }}
      />

      <AskAQuestion modal={askQuestion} setModal={setAskQuestion} user={user} />
    </React.Fragment>
  );
};

/**
 * other componenets
 */
const ProfileDropdown = ({ user, loggedInUser, isPrivate, setReport }) => {
  const message = `I'd recommend you to book a session with ${
    user?.name || ""
  } on ADPList 🙌!`;
  const url = (() => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return "";
  })();

  return (
    <Dropdown>
      <Dropdown.Toggle as={Action}>
        <i className="material-icons-round">keyboard_arrow_down</i>
      </Dropdown.Toggle>
      <DropdownMenu className="mt-2">
        <Dropdown.Item
          onClick={() => handleShare("twitter", null, url, message)}
        >
          <Twitter variant="default" size={18} />
          <span className="ml-3">Tweet this profile</span>
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => handleShare("linkedin", null, url, message)}
        >
          <Linkedin variant="default" size={18} />
          <span className="ml-3">Share on LinkedIn</span>
        </Dropdown.Item>
        {loggedInUser && !isPrivate && (
          <Dropdown.Item
            onClick={() => setReport(true)}
            className="justify-content-center grey-2-text"
          >
            Report profile
          </Dropdown.Item>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

/**
 * styles
 */
const DropdownMenu = styled(Dropdown.Menu)`
  @media (min-width: 768px) {
    right: 0 !important;
    left: auto !important;
  }
`;

const Wrapper = styled.div`
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

const NoShow = styled.div`
  display: flex;
  font-weight: 500;
  padding: 10px 12px;
  border-radius: 8px;
  white-space: nowrap;
  align-items: center;
  background-color: var(--muted-orange);
`;

const Action = styled.div`
  height: 56px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 8px !important;
  border: solid 1px var(--grey-3) !important;

  i {
    font-size: 28px !important;
  }
`;

export default Thumbnail;
