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
import AdpLogo from "../../Icons/AdpLogo";

const Navbar = ({
  app,
  items,
  logout,
  inverse,
  router = (link) => (window.location.href = link),
}) => {
  /**
   * state
   */
  const [isAuthenticated] = useGlobal("isAuthenticated");
  const [initUser] = useGlobal("user");

  const user = initUser?.identity_type
    ? initUser[initUser?.identity_type?.toLowerCase()]
    : {};

  return (
    <StyledNavbar
      bg="light"
      expand="lg"
      variant="light"
      collapseOnSelect
      avatar={user?.profile_photo_url}
      {...(inverse && { inverse: true })}
    >
      <Container>
        <NavbarBrand className="cursor-pointer" onClick={() => router("/")}>
          <AdpLogo color={inverse ? "#fff" : ""} />
        </NavbarBrand>
        <NavbarToggle aria-controls="navigation" />
        <NavbarCollapse id="navigation">
          <Nav className="ml-auto my-4 my-lg-0">
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
                  Account
                </NavDropdownItem>
                <NavDropdownItem className="red-text" onClick={logout}>
                  Logout
                </NavDropdownItem>
              </NavDropdown>
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
