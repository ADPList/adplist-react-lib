import React, { Fragment, useGlobal, useState, useEffect } from "reactn";
import { Container, Form, Nav, Image } from "react-bootstrap";
import { toast } from "react-toastify";
import useSWR from "swr";

import * as Styled from "./Styles";
import Notifications from "./Navbar/Notifications";
import Notification from "../../Icons/Notification";
import ArrowUpRight from "../../Icons/ArrowUpRight";
import ArrowRight from "../../Icons/ArrowRight";
import ChatBubble from "../../Icons/ChatBubble";
import SearchIcon from "../../Icons/Search";
import AdpLogo from "../../Icons/AdpLogo";
import Search from "../Search";
import Button from "../Button";
import cookie from "../../Utils/cookie";
import Notify from "../Notify";
import Grid from "../../Styles/Grid";

const Navbar = ({
  app,
  items,
  search,
  home = () => {},
  router = (link) => (window.location.href = link),
  ...props
}) => {
  /**
   * state
   */
  const [inverse, setInverse] = useState(props?.inverse || false);
  const [isAuthenticated, setAuth] = useGlobal("isAuthenticated");
  const [initUser, setUser] = useGlobal("user");
  const [, setToken] = useGlobal("accessToken");

  /**
   * variables
   */
  const identityType = initUser?.identity_type?.toLowerCase();
  const user = identityType ? initUser[identityType] : {};

  /**
   * apis
   */
  const {
    data: notifications,
    error: notificationError,
    mutate: notificationMutate,
  } = useSWR(
    initUser &&
      process.env.REACT_APP_MESSAGING_BASEURL +
        `/notification/?offset=0&limit=4&user=${initUser.id}`,
    { refreshInterval: 8000 },
  );

  /**
   * functions
   */
  const login = () =>
    window.open(
      `${process.env.REACT_APP_AUTH_URL || ""}/login${
        app ? `?app=${app}` : ""
      }`,
    );

  const logout = () => {
    cookie().deleteCookie("token");
    setToken(null);
    setUser(null);
    setAuth(false);

    toast(<Notify body="Logged out" type="success" />);
  };

  const signup = () =>
    window.open(`${process.env.REACT_APP_AUTH_URL || ""}/signup`);

  const handleClick = (item) => {
    if (item.target) {
      window.open(item.link);
    } else {
      router(item.link);
    }
  };

  /**
   * effect
   */
  useEffect(() => {
    setInverse(props.inverse);
  }, [props.inverse]);

  return (
    <Styled.StyledNavbar
      bg="light"
      expand="lg"
      variant="light"
      collapseOnSelect
      onToggle={(value) =>
        value ? setInverse(false) : setInverse(props?.inverse || false)
      }
      {...(inverse && { inverse: "true" })}
    >
      <Container>
        <Styled.NavbarBrand className="cursor-pointer" onClick={home}>
          <AdpLogo color={inverse ? "#fff" : "var(--default)"} />
        </Styled.NavbarBrand>
        <Styled.NavbarToggle
          {...(inverse && { inverse: "true" })}
          aria-controls="navigation"
        />
        <Styled.NavbarCollapse id="navigation">
          {search && (
            <Form className="search">
              <SearchIcon
                className="search__icon"
                color={inverse ? "var(--grey-4)" : "var(--teal)"}
              />
              <div className="search__container w-100">
                <Search
                  router={({ slug, type }) => router(`/${type}s/${slug}`)}
                  placeholder="Search for mentors, roles or companies"
                />
              </div>
            </Form>
          )}
          <Nav
            className="ml-auto align-items-lg-center"
            style={{ whiteSpace: "nowrap" }}
          >
            {items?.map((item, key) => {
              if (!item?.name) return false;

              return (
                <Fragment key={key}>
                  {item.menu ? (
                    <Styled.NavDropdown
                      title={
                        <Fragment>
                          <span>{item.name}</span>
                          <i className="material-icons-round font-size-18">
                            expand_more
                          </i>
                        </Fragment>
                      }
                      id="collasible-nav-dropdown"
                    >
                      {item.menu?.map((menu, key) => (
                        <Styled.NavDropdownItem
                          {...(!menu?.target && {
                            onClick: (e) =>
                              e.preventDefault() | router(menu?.link),
                          })}
                          href={menu?.link}
                          key={key}
                        >
                          <span className={`${menu?.target ? "mr-3" : ""}`}>
                            {menu?.name}
                          </span>
                          {menu?.target && (
                            <ArrowUpRight color="var(--grey-2)" />
                          )}
                        </Styled.NavDropdownItem>
                      ))}
                    </Styled.NavDropdown>
                  ) : (
                    <Fragment>
                      {item?.btn ? (
                        <Fragment>
                          {item.btn === "solid" && (
                            <SolidBtn
                              {...{
                                inverse,
                                onClick: () => handleClick(item),
                                value: item?.name,
                              }}
                            />
                          )}
                          {item.btn === "outline" && (
                            <OutlineBtn
                              {...{
                                inverse,
                                onClick: () => handleClick(item),
                                value: item?.name,
                              }}
                            />
                          )}
                        </Fragment>
                      ) : (
                        <Styled.NavLink
                          {...(!item?.target && {
                            onClick: (e) => {
                              e.preventDefault();
                              if (item?.onClick) return item?.onClick();
                              else return router(item?.link);
                            },
                          })}
                          {...(item?.target && { target: "_blank" })}
                          href={item?.link}
                        >
                          {item?.name}
                        </Styled.NavLink>
                      )}
                    </Fragment>
                  )}
                </Fragment>
              );
            })}

            {isAuthenticated ? (
              <Fragment>
                <Styled.NavDropdown
                  className="notif d-none d-lg-flex"
                  title={
                    <Fragment>
                      <Notification />
                      {!!notifications?.total_unseen && (
                        <span className="notif__badge">
                          {notifications.total_unseen}
                        </span>
                      )}
                    </Fragment>
                  }
                >
                  <Notifications
                    route={router}
                    data={notifications}
                    error={notificationError}
                    mutate={notificationMutate}
                  />
                </Styled.NavDropdown>

                <Styled.NavLink
                  href={`${process.env.REACT_APP_ADPLIST_URL}/notifications`}
                  className="notif--link d-flex d-lg-none"
                >
                  <span>Notifications</span>
                  {!!notifications?.total_unseen && (
                    <span className="notif__badge">
                      {notifications.total_unseen}
                    </span>
                  )}
                </Styled.NavLink>

                <Styled.NavDropdown
                  title={
                    <Fragment>
                      <div className="profile__avatar">
                        <Image src={user?.profile_photo_url} />
                      </div>
                      <i className="material-icons-round font-size-18">
                        expand_more
                      </i>
                    </Fragment>
                  }
                  id="collasible-nav-dropdown"
                >
                  <Styled.NavDropdownItem className="px-2 py-3 pb-0 border-bottom-0">
                    <Grid
                      gap="8px"
                      sm="24px 1fr"
                      className="align-items-center p-12 rounded muted-grey-bg"
                    >
                      <ChatBubble />
                      <div className="font-size-10">
                        <p className="mb-1 font-weight-600">
                          Met a mentor on ADPList?
                        </p>
                        <p className="mb-0">Remember to write them a review.</p>
                      </div>
                    </Grid>
                  </Styled.NavDropdownItem>
                  {(identityType === "designer" || !initUser) && (
                    <Styled.NavDropdownItem
                      href={`${process.env.REACT_APP_ADPLIST_URL}/become-a-mentor`}
                    >
                      Become a mentor
                    </Styled.NavDropdownItem>
                  )}
                  <Styled.NavDropdownItem
                    href={`${
                      process.env.REACT_APP_AUTH_URL || ""
                    }/dashboard/profile`}
                  >
                    Your profile
                  </Styled.NavDropdownItem>
                  <Styled.NavDropdownItem
                    href={`${
                      process.env.REACT_APP_AUTH_URL || ""
                    }/dashboard/profile/edit`}
                  >
                    Edit profile
                  </Styled.NavDropdownItem>
                  <Styled.NavDropdownItem
                    href={`${
                      process.env.REACT_APP_AUTH_URL || ""
                    }/dashboard/profile/change-password`}
                  >
                    Change Password
                  </Styled.NavDropdownItem>
                  <Styled.NavDropdownItem onClick={logout}>
                    <span className="mr-3 grey-text" style={{ opacity: 0.5 }}>
                      Logout
                    </span>
                    <ArrowRight color="var(--grey-2)" />
                  </Styled.NavDropdownItem>
                </Styled.NavDropdown>
              </Fragment>
            ) : (
              <Fragment>
                <OutlineBtn {...{ inverse, onClick: login, value: "Log in" }} />
                <SolidBtn {...{ inverse, onClick: signup, value: "Sign up" }} />
              </Fragment>
            )}
          </Nav>
        </Styled.NavbarCollapse>
      </Container>
    </Styled.StyledNavbar>
  );
};

const OutlineBtn = ({ inverse, onClick, value }) => (
  <Button
    className={`btn-48 px-32 ${
      inverse ? "btn--default-outline -inverted" : "btn--default-outline"
    }`}
    onClick={onClick}
    isValid
  >
    {value}
  </Button>
);

const SolidBtn = ({ inverse, onClick, value }) => (
  <Button
    className={`btn-48 px-32 ${
      inverse ? "btn--default-inverted" : "btn--default"
    }`}
    onClick={onClick}
    isValid
  >
    {value}
  </Button>
);

export default Navbar;
