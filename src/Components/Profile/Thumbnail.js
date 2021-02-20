import React, { useState, useGlobal } from "reactn";
import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

import { handleShare } from "../../Utils/helpers";
import ScheduleWithCalendly from "./Mentor/ScheduleWithCalendly";
import ScheduleWithEmail from "./Mentor/ScheduleWithEmail";
import copyToClipboard from "../../Utils/copyToClipboard";
import MessageQuestion from "../../Icons/MessageQuestion";
import ReportProfile from "./Mentor/ReportProfile";
import AskAQuestion from "./Mentor/AskAQuestion";
import Linkedin from "../../Icons/LinkedIn";
import Twitter from "../../Icons/Twitter";
import Confirm from "../Confirm";
import Button from "../Button";
import Image from "../Image";
import Grid from "../../Styles/Grid";
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
    <React.Fragment>
      <Wrapper>
        <div className="preview">
          <Image
            className="mb-4 shadow-sm"
            image={user?.profile_photo_url}
            onChange={(file) => handleImage(file)}
          />
          <Grid className="mx-auto" gap="16px" style={{ width: 280 }}>
            {isPrivate && user?.date_verified && (
              <div>
                <label className="text-left grey-2-text mb-2">
                  Your public profile
                </label>
                <Grid
                  className="grey-4-bg rounded py-12 px-3"
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
                              isValid={
                                loggedInUser?.identity_type?.toLowerCase() !==
                                "limbo"
                              }
                              onClick={handleScheduling}
                              className="btn--default w-100 btn-56"
                            >
                              Schedule a call
                            </Button>
                            <Action onClick={() => setAskQuestion(true)}>
                              <MessageQuestion size={24} />
                            </Action>
                            <ProfileDropdown
                              {...{ user, isPrivate, loggedInUser, setReport }}
                            />
                          </Grid>
                        ) : (
                          <Grid sm="1fr 58px" gap="8px">
                            <Button
                              isValid={
                                loggedInUser?.identity_type?.toLowerCase() !==
                                "limbo"
                              }
                              onClick={() => setAskQuestion(true)}
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

      <AskAQuestion
        modal={askQuestion}
        setModal={setAskQuestion}
        mentor={user}
      />
    </React.Fragment>
  );
};

/**
 * other componenets
 */
const ProfileDropdown = ({ loggedInUser, isPrivate, setReport }) => {
  const message = `I'd recommend you to book a session with ${loggedInUser.name} on ADPList 🙌!`;
  const url = window.location.href;

  return (
    <Dropdown>
      <Dropdown.Toggle as={Action}>
        <i className="material-icons-round">keyboard_arrow_down</i>
      </Dropdown.Toggle>
      <Dropdown.Menu className="mt-2">
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
            Report item
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

/**
 * styles
 */
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
