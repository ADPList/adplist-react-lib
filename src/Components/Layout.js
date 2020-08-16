import React, { Fragment, useGlobal, useDispatch } from "reactn";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import * as Icon from "../Icons";

import styled from "styled-components";
import FadeIn from "react-fade-in";

/**
 * all styled components
 */
const StyledNavLink = styled(Nav.Link)``;
const StyledNavDropdown = styled(NavDropdown)``;
const StyledNavbarBrand = styled(Navbar.Brand)``;
const StyledNavbarToggle = styled(Navbar.Toggle)``;
const StyledNavDropdownItem = styled(NavDropdown.Item)``;

const StyledLayout = styled(Navbar)`
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
  background-color: #fff !important;
  padding-bottom: 7px;
  padding-top: 7px;
  position: sticky;
  top: 0px;

  ${StyledNavbarBrand} {
    padding-bottom: 0px;
    padding-top: 0px;
  }

  .nav-item {
    display: flex;
    align-items: center;
  }

  ${StyledNavLink}, .nav-link {
    padding-right: 15px !important;
    padding-left: 15px !important;
    color: #0a243f !important;
    align-items: center;
    font-size: 14px;
    display: flex;

    .profile {
      &__avatar {
        background-color: #eaedf0;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        height: 40px;
        width: 40px;
      }
    }

    &.btn {
      padding: 0px 24px !important;
      color: #fff !important;
      margin-bottom: 8px;
      margin-top: 8px;
    }
  }

  ${StyledNavDropdown} {
    .dropdown-toggle {
      display: flex;
      align-items: center;

      span {
        display: block;
        margin-right: 4px;
      }
      &::after {
        display: none;
      }
    }
  }

  ${StyledNavDropdownItem} {
    align-items: center;
    display: flex;
  }
`;

const Layout = ({ children, items }) => {
  /**
   * state
   */
  const [isAuthenticated] = useGlobal("isAuthenticated");

  /**
   * dispatchers
   */
  const logout = useDispatch("auth.logout");

  return (
    <FadeIn>
      <StyledLayout collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <StyledNavbarBrand>
            <Icon.Logo />
          </StyledNavbarBrand>
          <StyledNavbarToggle aria-controls="navigation" />
          <Navbar.Collapse id="navigation">
            <Nav className="ml-auto">
              {items?.map((item, key) => (
                <Fragment key={key}>
                  {item.menu ? (
                    <StyledNavDropdown
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
                        <StyledNavDropdownItem key={key} href={menu.link}>
                          {menu.name}
                        </StyledNavDropdownItem>
                      ))}
                    </StyledNavDropdown>
                  ) : (
                    <StyledNavLink href={item.link}>{item.name}</StyledNavLink>
                  )}
                </Fragment>
              ))}

              {isAuthenticated ? (
                <StyledNavDropdown
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
                  <StyledNavDropdownItem
                    href={`${process.env.REACT_APP_AUTH_URL}/profile`}
                  >
                    Account
                  </StyledNavDropdownItem>
                  <StyledNavDropdownItem className="red-text" onClick={logout}>
                    Logout
                  </StyledNavDropdownItem>
                </StyledNavDropdown>
              ) : (
                <Fragment>
                  <StyledNavLink
                    href={`${process.env.REACT_APP_AUTH_URL}/signup`}
                    className="font-weight-600"
                  >
                    Signup
                  </StyledNavLink>
                  <StyledNavLink
                    href={`${process.env.REACT_APP_AUTH_URL}/login`}
                    className="btn btn--default"
                  >
                    Login
                  </StyledNavLink>
                </Fragment>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </StyledLayout>
      {children}
    </FadeIn>
  );
};

export default Layout;
