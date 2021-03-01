import React, { Fragment } from "reactn";
import styled from "styled-components";

import { SearchWrapper } from "../Styles";
import Notification from "../../../Icons/Notification";
import SearchIcon from "../../../Icons/Search";
import Profile from "../../../Icons/Profile";
import Unlock from "../../../Icons/Unlock";
import Search from "../../Search";
import Button from "../../../Components/Button";
import Badge from "../../../Components/Badge";
import Chat from "../../../Icons/Chat";
import Edit from "../../../Icons/Edit";
import Grid from "../../../Styles/Grid";

const Sidenav = ({
  user,
  items,
  router,
  logout,
  toggle,
  search,
  setToggle,
  handleAuth,
  identityType,
  notifications,
  isAuthenticated,
}) => {
  /**
   * variants
   */
  items = [
    ...items,
    ...(isAuthenticated
      ? [
          {
            icon: Notification,
            name: "Notification",
            link: `${process.env.REACT_APP_ADPLIST_URL}/notifications`,
            badge: notifications?.total_unseen,
          },
          {
            icon: Profile,
            name: "Your Profile",
            link: `${process.env.REACT_APP_AUTH_URL}/dashboard/profile`,
          },
          {
            icon: Profile,
            name: "Edit Profile",
            link: `${process.env.REACT_APP_AUTH_URL}/dashboard/profile/edit`,
          },
          {
            icon: Unlock,
            name: "Change Password",
            link: `${process.env.REACT_APP_AUTH_URL}/dashboard/profile/change-password`,
          },
        ]
      : []),
  ];

  return (
    <Fragment>
      <Wrapper {...{ toggle }}>
        <Content>
          <div className="d-flex justify-content-end mb-3">
            <a
              href="/"
              className="black-text text-decoration-none"
              onClick={(e) => e.preventDefault() | setToggle(false)}
            >
              <i className="material-icons-round font-size-32">close</i>
            </a>
          </div>

          {user && identityType === "designer" && (
            <Grid
              gap="8px"
              sm="24px 1fr"
              className="align-items-center p-12 rounded muted-grey-bg mb-2"
            >
              <Chat variant="filled" color="var(--teal)" />
              <div className="font-size-14 line-height-13">
                <p className="mb-1 font-weight-600">Met a mentor on ADPList?</p>
                <p className="mb-0">Remember to write them a review.</p>
              </div>
            </Grid>
          )}

          {user && identityType === "mentor" && (
            <a
              href={`${process.env.REACT_APP_ADPLIST_URL}/group-session`}
              className="teal-bg white-text btn btn-48 w-100 mb-2"
            >
              <i className="material-icons-round mr-1 font-size-20">add</i>
              <span>Start a session</span>
            </a>
          )}

          {search && (
            <SearchWrapper className="my-3 mx-0">
              <SearchIcon className="search__icon" color="var(--teal)" />
              <div className="search__container w-100">
                <Search
                  router={({ slug, type }) => router(`/${type}s/${slug}`)}
                  placeholder="Search for mentors, roles or companies"
                />
              </div>
            </SearchWrapper>
          )}

          <div>
            {items?.map((item, key) => (
              <Item
                key={key}
                badge={!!item?.badge}
                href={item?.link || "#"}
                {...(item?.onClick && { onClick: item.onClick })}
              >
                <span>
                  {item?.icon ? (
                    <item.icon
                      size={20}
                      variant="outline"
                      color="var(--grey-2)"
                    />
                  ) : (
                    ""
                  )}
                </span>
                <span className="item__content">
                  <span>{item.name}</span>
                  {item?.new ? (
                    <Badge variant="danger" className="ml-3">
                      New
                    </Badge>
                  ) : (
                    ""
                  )}
                </span>
                {item?.badge ? (
                  <span className="item__badge">{item.badge}</span>
                ) : (
                  ""
                )}
              </Item>
            ))}

            {isAuthenticated ? (
              <Item
                className="d-flex justify-content-between grey-2-text border-0"
                onClick={(e) => e.preventDefault() | logout()}
              >
                <span>Logout</span>
                <i className="material-icons-round grey-2-text">
                  arrow_forward
                </i>
              </Item>
            ) : (
              <Grid gap="20px" className="py-20">
                <Button
                  isValid
                  onClick={() => handleAuth("login")}
                  className="btn--default-outline px-4"
                >
                  Log in
                </Button>
                <Button
                  isValid
                  className="btn--default px-4"
                  onClick={() => handleAuth("signup")}
                >
                  Sign up
                </Button>
              </Grid>
            )}
          </div>
        </Content>
      </Wrapper>
    </Fragment>
  );
};

/**
 * styles
 */
const Wrapper = styled.div`
  left: ${({ toggle }) => (toggle ? 0 : "-100%")};
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.05);
  background-color: rgba(0, 0, 0, 0.25);
  transition: ease-in-out all 0.15s;
  position: fixed;
  z-index: 9999;
  height: 100%;
  width: 100%;
  top: 0px;
`;

const Content = styled.div`
  width: 80%;
  height: 100%;
  padding: 20px;
  background-color: #fff;
`;

const Item = styled.a`
  gap: 24px;
  height: 69px;
  display: grid;
  cursor: pointer;
  line-height: 1.6;
  padding: 20px 15px;
  text-decoration: none !important;
  grid-template-columns: 20px 1fr ${({ badge }) => badge && "28px"};
  border-bottom: solid 1px var(--grey-3);

  .item__content {
    display: flex;
    align-items: center;
    color: var(--black);
  }

  .item__badge {
    color: #fff;
    width: 28px;
    height: 28px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: var(--danger);
  }
`;

export default Sidenav;
