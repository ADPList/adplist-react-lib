import React, { Fragment, useEffect, useState } from "react";
import { Image } from "react-bootstrap";

import { updateNotificationSeenService } from "../../../Services/notificationService";
import * as Styled from "../Styles";
import Notification from "../../../Icons/Notification";
import Spinner from "../../Spinner";
import Button from "../../Button";

const Notifications = ({ data, error, mutate, route }) => {
  /**
   * variables
   */
  const notifications = data?.results;

  const [local, setLocal] = useState();

  /**
   * functions
   */
  const handleRoute = (url) => {
    if (local) route(url);
    else {
      if (typeof window !== "undefined") {
        window.location.href = url;
      }
    }
  };

  /**
   * effects
   */
  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocal(window?.location.origin === process.env.REACT_APP_ADPLIST_URL);
    }
  }, []);

  return (
    <Fragment>
      {!data && !error && (
        <Styled.NavDropdownItem>
          <Spinner contained />
        </Styled.NavDropdownItem>
      )}

      {data?.count === 0 && (
        <Styled.NavDropdownItem>
          <div className="text-center">
            <Notification className="mb-3" />
            <p className="mb-0">No new notifications</p>
          </div>
        </Styled.NavDropdownItem>
      )}

      {data?.count > 0 && (
        <Fragment>
          {notifications?.map(({ notification_type, ...notification }, key) => (
            <Fragment key={key}>
              {notification_type === "Announcement" && (
                <Announcement
                  {...{ ...notification, route, local, mutate, handleRoute }}
                />
              )}

              {notification_type === "Review" && (
                <Review
                  {...{ ...notification, route, local, mutate, handleRoute }}
                  route={route}
                />
              )}

              {(notification_type === "GroupSessionRSVP" ||
                notification_type === "GroupSessionUpdate" ||
                notification_type === "GroupSessionCancel") && (
                <GroupSession
                  {...{
                    route,
                    mutate,
                    notification_type,
                    ...notification,
                  }}
                  route={route}
                />
              )}
              {notification_type === "Note" && (
                <Note
                  {...{ ...notification, route, local, mutate, handleRoute }}
                />
              )}
            </Fragment>
          ))}

          <Styled.NavDropdownItem
            href={`${process.env.REACT_APP_ADPLIST_URL}/notifications`}
            className="grey-4-bg justify-content-center py-3 font-weight-600 teal-text"
          >
            Read all notifications
          </Styled.NavDropdownItem>
        </Fragment>
      )}
    </Fragment>
  );
};

/**
 * other components
 */
const Announcement = ({ id, seen, mutate, announcement: { title, url } }) => {
  return (
    <Styled.NavNotifItem as="div" className={`item ${!seen && "-unseen"}`}>
      <div className="item__avatar">
        <Notification />
      </div>
      <div className="item__content">
        <p className="mb-0">
          <b>Announcement:</b> {title}{" "}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              updateNotificationSeenService(id).then(() => mutate())
            }
          >
            Read more
          </a>
        </p>
      </div>
      {!seen && <span className="item__unseen" />}
    </Styled.NavNotifItem>
  );
};

const Review = ({
  id,
  seen,
  route,
  local,
  mutate,
  handleRoute,
  source_user: { profile_photo_url, name, identity_type, slug },
  destination_user,
}) => {
  const type = `${identity_type.toLowerCase()}s`;

  return (
    <Styled.NavNotifItem
      as="div"
      className={`item ${!seen && "-unseen"}`}
      onClick={() => {
        if (local) {
          return (
            updateNotificationSeenService(id).then(() => mutate()) |
            route(`/mentors/${destination_user.slug}`)
          );
        } else {
          return updateNotificationSeenService(id).then(() =>
            handleRoute(
              `${process.env.REACT_APP_ADPLIST_URL}/mentors/${destination_user.slug}`,
            ),
          );
        }
      }}
    >
      <div className="item__avatar">
        <Image src={profile_photo_url} />
      </div>
      <div className="item__content">
        <a
          href={`${process.env.REACT_APP_ADPLIST_URL}/${type}/${slug}`}
          onClick={(e) => e.stopPropagation()}
        >
          {name}
        </a>{" "}
        wrote a review on your profile.
      </div>
      {!seen && <span className="item__unseen" />}
    </Styled.NavNotifItem>
  );
};

const GroupSession = ({
  id,
  seen,
  local,
  group_session_name,
  group_session_slug,
  notification_type,
  mutate,
  route,
  source_user: { profile_photo_url, name, identity_type, slug },
  destination_user,
}) => {
  const type = `${identity_type.toLowerCase()}s`;

  return (
    <Styled.NavNotifItem
      as="div"
      className={`${!seen && "-unseen"}`}
      onClick={() => {
        if (local) {
          return (
            updateNotificationSeenService(id).then(() => mutate()) |
            route(`/mentors/${destination_user.slug}`)
          );
        } else {
          return updateNotificationSeenService(id).then(() =>
            handleRoute(
              `${process.env.REACT_APP_ADPLIST_URL}/mentors/${destination_user.slug}`,
            ),
          );
        }
      }}
    >
      <div className="item__avatar">
        <Image src={profile_photo_url} />
      </div>
      <div className="item__content">
        {notification_type === "GroupSessionRSVP" ? (
          <Fragment>
            <a
              href={`${process.env.REACT_APP_ADPLIST_URL}/${type}/${slug}`}
              onClick={(e) => e.stopPropagation()}
            >
              {name}
            </a>{" "}
            registered for your session{" "}
            <a
              href={`${process.env.REACT_APP_ADPLIST_URL}/?group-session=${group_session_slug}`}
              onClick={(e) => e.stopPropagation()}
              className="font-weight-600 black-text"
            >
              {group_session_name}
            </a>
          </Fragment>
        ) : notification_type === "GroupSessionUpdate" ? (
          <Fragment>
            <a
              href={`${process.env.REACT_APP_ADPLIST_URL}/${type}/${slug}`}
              onClick={(e) => e.stopPropagation()}
            >
              {name}
            </a>{" "}
            updated the session{" "}
            <a
              href={`${process.env.REACT_APP_ADPLIST_URL}/?group-session=${group_session_slug}`}
              className="font-weight-600 black-text"
            >
              {group_session_name}
            </a>
          </Fragment>
        ) : (
          <Fragment>
            <a
              href={`${process.env.REACT_APP_ADPLIST_URL}/${type}/${slug}`}
              onClick={(e) => e.stopPropagation()}
            >
              {name}
            </a>{" "}
            cancelled the session{" "}
            <a
              href="/"
              onClick={(e) => e.stopPropagation()}
              className="font-weight-600 black-text"
            >
              {group_session_name}
            </a>
          </Fragment>
        )}
      </div>
      {!seen && <span className="item__unseen" />}
    </Styled.NavNotifItem>
  );
};

const Note = ({
  id,
  seen,
  route,
  local,
  mutate,
  handleRoute,
  source_user: { profile_photo_url, name, identity_type, slug },
}) => {
  const type = `${identity_type.toLowerCase()}s`;

  return (
    <Styled.NavNotifItem as="div" className={`item ${!seen && "-unseen"}`}>
      <div className="item__avatar">
        <Image src={profile_photo_url} />
      </div>
      <div className="item__content">
        <p className="mb-12">
          <a href={`${process.env.REACT_APP_ADPLIST_URL}/${type}/${slug}`}>
            {name}
          </a>{" "}
          sent you a note. Write one for them.
        </p>
        {seen ? (
          <Button className="btn--default-outline px-3 mx-0 btn-36" isValid>
            Review written!
          </Button>
        ) : (
          <Button
            isValid
            className="btn--default btn-36 px-3 mx-0"
            onClick={() => {
              if (local) {
                return (
                  updateNotificationSeenService(id).then(() => mutate()) |
                  route(`/mentors/${slug}`)
                );
              } else {
                return updateNotificationSeenService(id).then(() =>
                  handleRoute(
                    `${process.env.REACT_APP_ADPLIST_URL}/mentors/${slug}`,
                  ),
                );
              }
            }}
          >
            Write review
          </Button>
        )}
      </div>
      {!seen && <span className="item__unseen" />}
    </Styled.NavNotifItem>
  );
};

export default Notifications;
