import { Container, Dropdown } from "react-bootstrap";
import styled from "styled-components";

/**
 * styles
 */
export const Wrapper = styled.div`
  /* height: 64px; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #eef1f4;
`;

export const Navigation = styled(Container)`
  height: 69px;
  display: flex;
  align-items: center;

  @media (min-width: 992px) {
    gap: 48px;
    display: grid;
    grid-template-columns: 140px 1fr;
  }
`;

export const NavItems = styled.div`
  align-items: center;
  margin-left: auto;
  display: flex;
  width: 100%;
`;

export const Toggle = styled.button`
  background-color: transparent;
  outline: none !important;
  display: flex;
  border: none;
  height: 36px;
  padding: 0px;
  width: 36px;

  i {
    font-size: 28px;
    margin: auto;
  }
`;

export const Brand = styled.a`
  margin-right: 48px;
  display: block;
  height: 38px;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  max-width: 498px;
  position: relative;
  margin-right: 48px;
  border-radius: 6px;
  align-items: center;
  background-color: #fff;
  transition: ease all 0.25s;
  border: solid 1px var(--grey-3);

  .search__icon {
    transition: ease all 0.25s;
    position: absolute;
    left: 16px;
  }

  .form-control {
    transition: ease all 0.25s;
    padding: 0px 16px 0px 48px;
    height: 48px;
  }

  &:focus-within {
    background-color: #fff;
    transition: ease all 0.25s;
    border-color: var(--black);

    .search__icon {
      transition: ease all 0.25s;
      opacity: 0;
      z-index: 0;
    }

    .form-control {
      transition: ease all 0.25s;
      padding: 0px 16px;
    }

    .placeholder {
      color: var(--grey-4);
    }
  }
`;

export const Items = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  white-space: nowrap;

  .nav__item {
    display: flex;
    font-size: 16px;
    cursor: pointer;
    padding: 12px 15px;
    align-items: center;
    color: var(--black);
    text-decoration: none;

    .btn {
      font-size: 14px;
      height: 45px;
    }
  }
`;

export const NavDropdown = styled(Dropdown)``;

export const NavDropdownToggle = styled(Dropdown.Toggle)``;

export const NavDropdownMessageToggle = styled(Dropdown.Toggle)`
  background-color: var(--grey-3) !important;
  justify-content: center;
  padding: 0px !important;
  height: 36px !important;
  width: 36px !important;
  align-items: center;
  border-radius: 50%;
  display: flex;

  .notif__badge {
    top: -3px;
    right: -3px;
    width: 16px;
    height: 16px;
    color: #fff;
    font-size: 10px;
    position: absolute;
    border-radius: 50%;
    align-items: center;
    margin: 0px !important;
    justify-content: center;
    display: flex !important;
    border: solid 2px #fff;
    background-color: var(--danger);
  }
`;

export const NavDropdownMenu = styled(Dropdown.Menu)`
  margin-top: 16px;
`;

export const NavDropdownItem = styled(Dropdown.Item)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavNotifItem = styled(Dropdown.Item)`
  gap: 12px;
  width: 320px;
  padding: 24px;
  cursor: pointer;
  position: relative;
  display: grid !important;
  grid-template-columns: 40px minmax(0, 1fr);

  .item__avatar {
    background-color: var(--grey-3);
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    display: flex;
    height: 40px;
    width: 40px;

    img {
      object-position: center;
      border-radius: 50%;
      object-fit: cover;
      display: block;
      height: 100%;
      width: 100%;
    }
  }

  .item__content {
    line-height: 1.4;
    font-size: 14px;
    white-space: pre-wrap;

    a,
    b {
      font-weight: 600;
    }

    a {
      color: var(--teal);
    }
  }

  .item__unseen {
    width: 12px;
    height: 12px;
    margin: 13px 0px;
    border-radius: 50%;
    background-color: var(--danger);
  }

  &.-unseen {
    grid-template-columns: 40px minmax(0, 1fr) 12px;
  }
`;
