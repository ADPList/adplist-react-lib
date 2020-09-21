import { Container, Navbar, Nav, NavDropdown as Drop } from "react-bootstrap";

import styled from "styled-components";

import Button from "../Button";

/**
 * all styled nav components
 */
export const NavLink = styled(Nav.Link)``;
export const NavDropdown = styled(Drop)``;
export const NavbarBrand = styled(Navbar.Brand)``;
export const NavbarToggle = styled(Navbar.Toggle)``;
export const NavbarCollapse = styled(Navbar.Collapse)``;
export const NavDropdownItem = styled(Drop.Item)``;

export const StyledNavbar = styled(Navbar)`
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
  background-color: #fff !important;
  padding-bottom: 7px;
  position: sticky;
  padding-top: 7px;
  z-index: 999;
  top: 0;

  ${NavbarBrand} {
    padding-bottom: 0px;
    padding-top: 0px;
  }

  ${NavbarToggle} {
    border: none;
    padding: 0px;
    outline: none;
  }

  .react-reveal {
    width: 100%;
  }

  .nav-item {
    display: flex;
    align-items: center;
  }

  ${NavLink}, .nav-link {
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

        img {
          height: 100%;
        }
      }
    }

    &.btn {
      padding: 0px 24px !important;
      color: #fff !important;
      margin-bottom: 8px;
      margin-top: 8px;
    }
  }

  ${NavDropdown} {
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

  ${NavDropdownItem} {
    align-items: center;
    display: flex;
  }

  @media (max-width: 767px) {
    padding-bottom: 20px;
    padding-top: 20px;

    ${NavbarCollapse} {
      padding-top: 20px;
    }

    ${NavLink}, .nav-link {
      padding-right: 0px !important;
      padding-left: 0px !important;
    }
  }

  @media (max-width: 575px) {
    .container {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
`;

/**
 * all styled footer components
 */
export const InfoContainer = styled(Container)``;
export const BottomFooter = styled.div``;
export const StyledButton = styled(Button)``;

export const StyledFooter = styled.div`
  ${InfoContainer} {
    padding-top: 72px;
    padding-bottom: 72px;

    .impact {
      margin-bottom: 72px;
    }

    .impact,
    .newsletter {
      max-width: 480px;
    }

    .buttons {
      margin-left: -10px;
      margin-right: -10px;

      .btn-col {
        padding-left: 10px;
        padding-right: 10px;

        &:first-child {
          margin-bottom: 20px;
        }

        .btn {
          padding-left: 40px;
          padding-right: 40px;
        }
      }
    }

    .field-container {
      width: 100%;
    }

    ${StyledButton} {
      width: 100%;
    }
  }

  ${BottomFooter} {
    background-color: var(--grey-3);
    padding-bottom: 32px;
    padding-top: 32px;

    .links {
      margin-left: -10px;
      margin-right: -10px;

      a {
        margin-bottom: 16px;
        margin-right: 10px;
        margin-left: 10px;
        font-size: 12px;
        display: block;
      }

      &.-first {
        font-weight: 600;

        a {
          color: var(--default);
        }
      }

      &.-second {
        a {
          color: var(--default);
        }
      }

      &.-third {
        a {
          color: var(--grey-2);
        }
      }
    }
  }

  @media (min-width: 768px) {
    ${InfoContainer} {
      .field-container {
        max-width: 280px;
      }

      ${StyledButton} {
        width: auto;
      }
    }
  }

  @media (min-width: 992px) {
    ${InfoContainer} {
      .impact,
      .newsletter {
        max-width: 380px;
      }
    }
  }
`;
