import { Container, Navbar, Nav, NavDropdown as Drop } from "react-bootstrap";

import styled from "styled-components";

import Button from "../Button";

/**
 * all styled nav components
 */
export const NavLink = styled(Nav.Link)``;
export const NavDropdown = styled(Drop)``;
export const NavbarBrand = styled(Navbar.Brand)``;
export const NavDropdownItem = styled(Drop.Item)``;
export const NavbarCollapse = styled(Navbar.Collapse)`
  @media (max-width: 991px) {
    background-color: #fff;
    padding-bottom: 24px;
    position: absolute;
    overflow-y: auto;
    width: 100%;
    top: 81px;
    left: 0;
  }

  @media (max-width: 767px) {
    top: 77px;
  }
`;
export const NavbarToggle = styled(Navbar.Toggle)`
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3Csvg width='28' height='22' viewBox='0 0 28 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M26 9.875H2C1.70163 9.875 1.41548 9.99353 1.2045 10.2045C0.993526 10.4155 0.875 10.7016 0.875 11C0.875 11.2984 0.993526 11.5845 1.2045 11.7955C1.41548 12.0065 1.70163 12.125 2 12.125H26C26.2984 12.125 26.5845 12.0065 26.7955 11.7955C27.0065 11.5845 27.125 11.2984 27.125 11C27.125 10.7016 27.0065 10.4155 26.7955 10.2045C26.5845 9.99353 26.2984 9.875 26 9.875Z' fill='${({
      inverse,
    }) =>
      inverse
        ? "white"
        : "black"}'/%3E%3Cpath d='M2 3.125H26C26.2984 3.125 26.5845 3.00647 26.7955 2.7955C27.0065 2.58452 27.125 2.29837 27.125 2C27.125 1.70163 27.0065 1.41548 26.7955 1.2045C26.5845 0.993526 26.2984 0.875 26 0.875H2C1.70163 0.875 1.41548 0.993526 1.2045 1.2045C0.993526 1.41548 0.875 1.70163 0.875 2C0.875 2.29837 0.993526 2.58452 1.2045 2.7955C1.41548 3.00647 1.70163 3.125 2 3.125Z' fill='${({
      inverse,
    }) =>
      inverse
        ? "white"
        : "black"}'/%3E%3Cpath d='M26 18.875H2C1.70163 18.875 1.41548 18.9935 1.2045 19.2045C0.993526 19.4155 0.875 19.7016 0.875 20C0.875 20.2984 0.993526 20.5845 1.2045 20.7955C1.41548 21.0065 1.70163 21.125 2 21.125H26C26.2984 21.125 26.5845 21.0065 26.7955 20.7955C27.0065 20.5845 27.125 20.2984 27.125 20C27.125 19.7016 27.0065 19.4155 26.7955 19.2045C26.5845 18.9935 26.2984 18.875 26 18.875Z' fill='${({
      inverse,
    }) => (inverse ? "white" : "black")}'/%3E%3C/svg%3E%0A");
  }
`;

export const StyledNavbar = styled(Navbar)`
  transition: ease all 0.25s;
  padding-bottom: 24px;
  padding-top: 24px;
  position: sticky;
  display: block;
  z-index: 999;
  top: 0;

  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
  background-color: #fff !important;

  .search {
    display: flex;
    position: relative;
    border-radius: 6px;
    align-items: center;
    width: calc(100% - 48px);
    transition: ease all 0.25s;
    margin: 24px 20px 0px 20px;
    border: solid 1px var(--grey-4);
    background-color: ${({ inverse }) => (inverse ? "transparent" : "#fff")};

    svg {
      transition: ease all 0.25s;
      position: absolute;
      left: 16px;
    }

    .value-container {
      transition: ease all 0.25s;
      padding: 0px 48px;
    }

    .placeholder {
      ${({ inverse }) => inverse && `color: var(--grey-4)`}
    }

    &:focus-within {
      transition: ease all 0.25s;
      background-color: #fff;

      svg {
        transition: ease all 0.25s;
        opacity: 0;
        z-index: 0;
      }

      .value-container {
        transition: ease all 0.25s;
        padding: 0px 16px;
      }

      .placeholder {
        color: #a7a9c0;
      }
    }
  }

  ${NavbarBrand} {
    transition: ease all 0.25s;
    padding-bottom: 0px;
    padding-top: 0px;
    margin: 0px;
  }

  ${NavbarToggle} {
    border: none;
    padding: 0px;
    outline: none;
  }

  .nav-item {
    display: flex;
    align-items: center;
  }

  ${NavLink}, .nav-link {
    padding: 24px 40px !important;
    color: var(--grey) !important;
    transition: ease all 0.25s;
    align-items: center;
    font-size: 16px;
    display: flex;

    .profile {
      &__avatar {
        ${({ avatar }) =>
          avatar &&
          `
          background-image: url(${avatar});
        `}
        background-color: var(--teal);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: 50%;
        height: 40px;
        width: 40px;
      }
    }
  }

  .btn {
    margin: 24px 20px 0px 20px;
  }

  ${NavDropdown} {
    .dropdown-toggle {
      align-items: center;
      display: flex;

      span {
        margin-right: 4px;
        display: block;
      }
      &::after {
        display: none;
      }
    }
  }

  ${NavDropdownItem} {
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    .btn {
      margin: 24px 40px 0px 40px;
    }

    .search {
      margin-left: 40px;
      margin-right: 40px;
    }
  }

  @media (min-width: 992px) {
    ${NavLink}, .nav-link {
      padding: 0px 15px !important;
      transition: ease all 0.25s;
    }
    .btn {
      margin: 0px 8px 0px 8px;
      height: 45px !important;
      font-size: 14px;

      &:last-child {
        margin-right: 0px;
      }
    }

    .search {
      width: 100%;
      max-width: 500px;
      margin: 0px 48px;
    }
  }

  @media (max-width: 767px) {
    padding-bottom: 20px;
    padding-top: 20px;

    ${NavLink}, .nav-link {
      padding-right: 20px !important;
      padding-left: 20px !important;
    }
  }

  @media (max-width: 575px) {
    .container {
      padding-right: 0px;
      padding-left: 0px;
    }
  }

  ${({ inverse }) =>
    inverse &&
    `
        background-color: transparent !important;
        
        @media (min-width: 992px) {
          ${NavLink}, .nav-link {
            color: #fff !important;
          }
        }
      `}
`;

/**
 * all styled footer components
 */
export const InfoContainer = styled(Container)``;
export const BottomFooter = styled.div``;
export const StyledButton = styled(Button)``;

export const StyledFooter = styled.div`
  margin-top: auto;

  ${BottomFooter} {
    background-color: var(--grey-3);
    padding-bottom: 32px;
    padding-top: 32px;

    .socials {
      a {
        svg {
          width: 40px;
          height: 40px;
        }
      }
    }

    .links {
      margin-left: -10px;
      margin-right: -10px;

      a {
        color: var(--default);
        margin-bottom: 32px;
        margin-right: 10px;
        margin-left: 10px;
        display: block;
      }

      &.-first {
        font-weight: 600;

        a {
          color: var(--default);
          display: block;
        }
      }

      &.-second {
        a {
          color: var(--default);
          font-size: 14px;
          display: block;
        }
      }

      &.-third {
        a {
          text-decoration: underline;
          color: var(--grey-2);
        }
      }
    }

    @media (min-width: 992px) {
      .links {
        a {
          margin-bottom: 0px;
        }
      }
    }
  }
`;
