import React, { useGlobal, useState } from "reactn";
import styled from "styled-components";

import { copyToClipboard } from "../../Utils";
import ScheduleWithCalendly from "./Mentor/ScheduleWithCalendly";
import ScheduleWithEmail from "./Mentor/ScheduleWithEmail";
import ReportProfile from "./Mentor/ReportProfile";
import ArrowUpRight from "../../Icons/ArrowUpRight";
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
  const [scheduleWithEmail, setScheduleWithEmail] = useState(false);
  const [scheduleWithCalendly, setScheduleWithCalendly] = useState(false);

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
    <React.Fragment>
      <Wrapper>
        <div className="preview">
          <Image
            className="mb-4 shadow-sm"
            image={user?.profile_photo_url}
            onChange={(file) => handleImage(file)}
          />
          <Grid className="mx-auto" gap="16px" style={{ width: 280 }}>
            {isPrivate && (
              <div>
                <label className="text-left grey-2-text mb-2">
                  Your public profile
                </label>
                <Grid
                  className="grey-3-bg rounded py-12 px-3"
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
                    {!isPrivate && (
                      <Button
                        isValid
                        className="btn--default w-100 btn-56"
                        onClick={() => handleScheduling()}
                      >
                        <span className="mr-2">
                          {user?.calendly_url
                            ? "Schedule time with me"
                            : "Send me an email"}
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
                  </React.Fragment>
                ) : (
                  <Button isValid className="pale-peach-bg w-100 btn-56">
                    <Moon />
                    <span className="ml-3">I’m currently on a break</span>
                  </Button>
                )}
              </React.Fragment>
            )}
            {user?.portfolio_url && (
              <Button
                isValid
                className="grey-3-bg default-text w-100 btn-56"
                onClick={() => handleProfile()}
              >
                <span className="mr-2">View my LinkedIn</span>
                <ArrowUpRight color="var(--default)" />
              </Button>
            )}

            {loggedInUser && (
              <a
                href="/"
                className="default-text py-2"
                onClick={(e) => e.preventDefault() | setReport(true)}
              >
                Report this profile
              </a>
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
    </React.Fragment>
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

export default Thumbnail;
