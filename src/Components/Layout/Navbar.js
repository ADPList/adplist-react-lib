import React, { Fragment, useDispatch, useGlobal } from "reactn";
import { Container, Nav } from "react-bootstrap";

import FadeIn from "react-fade-in";

import {
  NavLink,
  NavbarBrand,
  NavDropdown,
  NavbarToggle,
  StyledNavbar,
  NavbarCollapse,
  NavDropdownItem,
} from "./Styles";

import * as Icon from "../../Icons";

const Navbar = ({ items }) => {
  /**
   * state
   */
  const [isAuthenticated] = useGlobal("isAuthenticated");

  /**
   * dispatcher
   */
  const logout = useDispatch("auth.logout");

  return (
    <StyledNavbar collapseOnSelect expand="md" bg="light" variant="light">
      <FadeIn className="w-100">
        <Container>
          <NavbarBrand>
            <Icon.Logo />
          </NavbarBrand>
          <NavbarToggle aria-controls="navigation" />
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
                        <NavDropdownItem key={key} href={menu.link}>
                          {menu.name}
                        </NavDropdownItem>
                      ))}
                    </NavDropdown>
                  ) : (
                    <NavLink href={item.link}>{item.name}</NavLink>
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
                    href={`${process.env.REACT_APP_AUTH_URL}/profile`}
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
                    href={`${process.env.REACT_APP_AUTH_URL}/signup`}
                    className="font-weight-600"
                  >
                    Signup
                  </NavLink>
                  <NavLink
                    href={`${process.env.REACT_APP_AUTH_URL}/login`}
                    className="btn btn--default"
                  >
                    Login
                  </NavLink>
                </Fragment>
              )}
            </Nav>
          </NavbarCollapse>
        </Container>
      </FadeIn>
    </StyledNavbar>
  );
};

export default Navbar;
