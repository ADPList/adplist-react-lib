import React, { Fragment, useGlobal } from "reactn";
import { Container, Nav } from "react-bootstrap";

import {
  NavLink,
  NavbarBrand,
  NavDropdown,
  NavbarToggle,
  StyledNavbar,
  NavbarCollapse,
  NavDropdownItem,
} from "./Styles";

import ArrowUpRight from "../../Icons/ArrowUpRight";
import ArrowRight from "../../Icons/ArrowRight";
import useCookie from "../../Utils/useCookie";
import AdpLogo from "../../Icons/AdpLogo";

const Navbar = ({
  app,
  items,
  logout,
  inverse,
  startProject = () => {},
  router = (link) => (window.location.href = link),
}) => {
  /**
   * state
   */
  const [isAuthenticated] = useGlobal("isAuthenticated");
  const [initUser] = useGlobal("user");

  const identityType = initUser?.identity_type?.toLowerCase();
  const user = identityType ? initUser[identityType] : {};

  /**
   * function
   */
  const { getCookie } = useCookie();

  /**
   * variables
   */
  const token = getCookie("token");

  return (
    <StyledNavbar
      bg="light"
      expand="lg"
      variant="light"
      collapseOnSelect
      avatar={user?.profile_photo_url}
      {...(inverse && { inverse: "true" })}
    >
      <Container>
        <NavbarBrand className="cursor-pointer" onClick={() => router("/")}>
          <AdpLogo color={inverse ? "#fff" : ""} />
        </NavbarBrand>
        <NavbarToggle
          {...(inverse && { inverse: "true" })}
          aria-controls="navigation"
        />
        <NavbarCollapse id="navigation">
          <Nav className="ml-auto">
            {items?.map((item, key) => (
              <Fragment key={key}>
                {item.menu ? (
                  <NavDropdown
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
                      <NavDropdownItem
                        {...(!menu?.target
                          ? {
                              onClick: (e) =>
                                e.preventDefault() | router(menu?.link),
                            }
                          : {
                              target: menu?.name,
                            })}
                        href={menu?.link}
                        key={key}
                      >
                        <span className={`${menu?.target ? "mr-3" : ""}`}>
                          {menu?.name}
                        </span>
                        {menu?.target && <ArrowUpRight color="var(--grey-2)" />}
                      </NavDropdownItem>
                    ))}
                  </NavDropdown>
                ) : (
                  <NavLink
                    {...(!item?.target && {
                      onClick: (e) => e.preventDefault() | router(item?.link),
                    })}
                    href={item?.link}
                  >
                    {item?.name}
                  </NavLink>
                )}
              </Fragment>
            ))}

            {isAuthenticated ? (
              <Fragment>
                {identityType === "mentor" && (
                  <NavLink
                    onClick={() => startProject()}
                    className={`btn btn-48 mr-lg-3 ${
                      inverse ? "white-bg grey-text" : "btn--default"
                    }`}
                  >
                    Start a project
                  </NavLink>
                )}
                <NavDropdown
                  title={
                    <Fragment>
                      <div className="profile__avatar" />
                      <i className="material-icons-round font-size-18">
                        expand_more
                      </i>
                    </Fragment>
                  }
                  id="collasible-nav-dropdown"
                >
                  <NavDropdownItem
                    href={`${
                      process.env.REACT_APP_AUTH_URL || ""
                    }/dashboard/profile`}
                  >
                    Your profile
                  </NavDropdownItem>
                  <NavDropdownItem
                    href={`${
                      process.env.REACT_APP_AUTH_URL || ""
                    }/dashboard/profile`}
                  >
                    Projects
                  </NavDropdownItem>
                  <NavDropdownItem onClick={logout}>
                    <span className="mr-3 grey-text" style={{ opacity: 0.5 }}>
                      Logout
                    </span>
                    <ArrowRight color="var(--grey-2)" />
                  </NavDropdownItem>
                </NavDropdown>
              </Fragment>
            ) : (
              <Fragment>
                <NavLink
                  href={`${process.env.REACT_APP_AUTH_URL || ""}/signup${
                    app ? `?app=${app}` : ""
                  }`}
                >
                  Signup
                </NavLink>
                <NavLink
                  href={`${process.env.REACT_APP_AUTH_URL || ""}/login${
                    app ? `?app=${app}` : ""
                  }`}
                  className={`btn btn-48 ${
                    inverse ? "white-bg grey-text" : "btn--default"
                  }`}
                  {...(token && { disabled: true })}
                >
                  Login
                </NavLink>
              </Fragment>
            )}
          </Nav>
        </NavbarCollapse>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
