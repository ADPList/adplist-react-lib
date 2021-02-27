import React, { Fragment, useGlobal, useState, useEffect } from "reactn";
import { toast } from "react-toastify";
import useSWR from "swr";

import * as Styled from "./Styles";
import ProfileDropdown from "./Navbar/ProfileDropdown";
import Notifications from "./Navbar/Notifications";
import Notification from "../../Icons/Notification";
import ArrowUpRight from "../../Icons/ArrowUpRight";
import SearchIcon from "../../Icons/Search";
import useWidth from "../../Utils/useWidth";
import AdpLogo from "../../Icons/AdpLogo";
import Sidenav from "./Navbar/Sidenav";
import Search from "../Search";
import cookie from "../../Utils/cookie";
import Notify from "../Notify";
import Button from "../Button";
import Badge from "../Badge";

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
  const [sidenav, setSideNav] = useState(false);
  const [initUser, setUser] = useGlobal("user");
  const [, setToken] = useGlobal("accessToken");

  /**
   * variables
   */
  const identityType = initUser?.identity_type?.toLowerCase();
  const user = identityType ? initUser[identityType] : {};
  const width = useWidth();

  /**
   * apis
   */
  const {
    data: notifications,
    error: notificationError,
    mutate: notificationMutate,
  } = useSWR(
    false &&
      process.env.REACT_APP_MESSAGING_BASEURL +
        `/notification/?offset=0&limit=4&user=${initUser.id}`,
    { refreshInterval: 4000, shouldRetryOnError: false, errorRetryCount: 0 },
  );

  /**
   * functions
   */
  const handleAuth = (type) => {
    if (typeof window !== "undefined") {
      if (type === "signup") {
        window.open(
          `${process.env.REACT_APP_AUTH_URL || ""}/${type}${
            app && type === "login" ? `?app${app}` : ""
          }`,
        );
      }
    }
  };

  const logout = () =>
    cookie().deleteCookie("token") |
    setToken(null) |
    setUser(null) |
    setAuth(false) |
    toast(<Notify body="Logged out" type="success" />);

  /**
   * effect
   */
  useEffect(() => {
    setInverse(props.inverse);
  }, [props.inverse]);

  return (
    <Fragment>
      <Styled.Wrapper>
        <Styled.Navigation>
          <Styled.Brand href={process.env.REACT_APP_ADPLIST_URL}>
            <AdpLogo className="h-100" />
          </Styled.Brand>
          {width < 992 && (
            <Styled.NavItems>
              <Styled.Toggle
                className="ml-auto"
                onClick={() => setSideNav(true)}
              >
                <i className="material-icons-round">menu</i>
              </Styled.Toggle>
            </Styled.NavItems>
          )}

          {width >= 992 && (
            <Styled.NavItems>
              <Styled.SearchWrapper>
                <SearchIcon
                  className="search__icon"
                  color={inverse ? "var(--grey-4)" : "var(--teal)"}
                />
                <div className="search__container w-100">
                  {search && (
                    <Search
                      router={({ slug, type }) => router(`/${type}s/${slug}`)}
                      placeholder="Search for mentors, roles or companies"
                    />
                  )}
                </div>
              </Styled.SearchWrapper>

              <Styled.Items>
                {items?.map((item, key) => {
                  if (!item?.name) return false;

                  return (
                    <Fragment key={key}>
                      {item.menu ? (
                        <Styled.NavDropdown>
                          <Styled.NavDropdown.Toggle
                            as="a"
                            className="nav__item"
                          >
                            <span>{item.name}</span>
                            <i className="material-icons-round font-size-18">
                              expand_more
                            </i>
                          </Styled.NavDropdown.Toggle>
                          <Styled.NavDropdownMenu>
                            {item.menu?.map((menu, key) => (
                              <Styled.NavDropdownItem
                                href={menu?.link}
                                key={key}
                              >
                                <span
                                  className={`${menu?.target ? "mr-3" : ""}`}
                                >
                                  {menu?.name}
                                </span>
                                {menu?.target && (
                                  <ArrowUpRight color="var(--grey-2)" />
                                )}
                              </Styled.NavDropdownItem>
                            ))}
                          </Styled.NavDropdownMenu>
                        </Styled.NavDropdown>
                      ) : (
                        <a
                          className="nav__item"
                          onClick={(e) => {
                            if (item?.onClick)
                              return e.preventDefault() | item?.onClick();
                          }}
                          href={item?.link}
                        >
                          {item?.new && (
                            <Badge variant="danger" className="mr-2">
                              New
                            </Badge>
                          )}
                          <span>{item?.name}</span>
                        </a>
                      )}
                    </Fragment>
                  );
                })}

                {isAuthenticated ? (
                  <Fragment>
                    <div className="nav__item">
                      <Styled.NavDropdown>
                        <Styled.NavDropdownMessageToggle id="notification">
                          <Notification />
                          {!!notifications?.total_unseen && (
                            <span className="notif__badge">
                              {notifications.total_unseen}
                            </span>
                          )}
                        </Styled.NavDropdownMessageToggle>
                        <Styled.NavDropdownMenu>
                          <Notifications
                            route={router}
                            data={notifications}
                            error={notificationError}
                            mutate={notificationMutate}
                          />
                        </Styled.NavDropdownMenu>
                      </Styled.NavDropdown>
                    </div>

                    <ProfileDropdown
                      {...{ logout, user, initUser, identityType }}
                    />
                    {identityType !== "mentor" && (
                      <div className="nav__item pr-0">
                        <a
                          href={`${process.env.REACT_APP_ADPLIST_URL}/group-session`}
                          className="teal-bg white-text btn"
                        >
                          <i className="material-icons-round mr-1 font-size-20">
                            add
                          </i>
                          <span>Start a session</span>
                        </a>
                      </div>
                    )}
                  </Fragment>
                ) : (
                  <Fragment>
                    <div className="nav__item">
                      <Button
                        isValid
                        onClick={() => handleAuth("login")}
                        className="btn--default-outline px-4"
                      >
                        Log in
                      </Button>
                    </div>
                    <div className="nav__item pr-0">
                      <Button
                        isValid
                        className="btn--default px-4"
                        onClick={() => handleAuth("signup")}
                      >
                        Sign up
                      </Button>
                    </div>
                  </Fragment>
                )}
              </Styled.Items>
            </Styled.NavItems>
          )}
        </Styled.Navigation>
      </Styled.Wrapper>
      <Sidenav
        toggle={sidenav}
        setToggle={setSideNav}
        {...{ items, notifications, user, initUser, identityType }}
      />
    </Fragment>
  );
};

export default Navbar;
