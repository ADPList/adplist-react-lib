import React, { Fragment } from "reactn";
import { Image } from "react-bootstrap";
import styled from "styled-components";

import ArrowRight from "../../../Icons/ArrowRight";
import Chat from "../../../Icons/Chat";
import Grid from "../../../Styles/Grid";

import {
  NavDropdown,
  NavDropdownMenu,
  NavDropdownItem,
  NavDropdownToggle,
} from "../Styles";

const ProfileDropdown = ({ logout, user, initUser, identityType }) => (
  <div className="nav__item">
    <NavDropdown>
      <NavDropdownToggle>
        <Profile className="shadow-sm">
          <Image src={user?.profile_photo_url} />
        </Profile>
        <i className="material-icons-round font-size-18 black-text">
          expand_more
        </i>
      </NavDropdownToggle>
      <NavDropdownMenu>
        <NavDropdownItem className="px-2 py-3 pb-0 border-bottom-0">
          <Grid
            gap="8px"
            sm="24px 1fr"
            className="align-items-center p-12 rounded muted-grey-bg"
          >
            <Chat variant="filled" size={18} color="var(--teal)" />
            <div className="font-size-10">
              <p className="mb-1 font-weight-600">Met a mentor on ADPList?</p>
              <p className="mb-0">Remember to write them a review.</p>
            </div>
          </Grid>
        </NavDropdownItem>
        {identityType === "designer" && (
          <NavDropdownItem
            href={`${process.env.REACT_APP_ADPLIST_URL}/become-a-mentor`}
          >
            Become a mentor
          </NavDropdownItem>
        )}
        {identityType === "mentor" && user?.date_verified && (
          <Fragment>
            <NavDropdownItem
              href={`${process.env.REACT_APP_ADPLIST_URL}/send-notes`}
            >
              Send Notes
            </NavDropdownItem>
            <NavDropdownItem
              href={`${process.env.REACT_APP_ADPLIST_URL}/mentors`}
            >
              Find a mentor
            </NavDropdownItem>
          </Fragment>
        )}
        <NavDropdownItem
          href={`${process.env.REACT_APP_AUTH_URL || ""}/dashboard/profile`}
        >
          Your profile
        </NavDropdownItem>

        <NavDropdownItem
          href={`${
            process.env.REACT_APP_AUTH_URL || ""
          }/dashboard/profile/edit`}
        >
          Edit profile
        </NavDropdownItem>

        <NavDropdownItem
          href={`${
            process.env.REACT_APP_AUTH_URL || ""
          }/dashboard/profile/change-password`}
        >
          Change Password
        </NavDropdownItem>
        <NavDropdownItem onClick={logout}>
          <span className="mr-3 grey-text" style={{ opacity: 0.5 }}>
            Logout
          </span>
          <ArrowRight color="var(--grey-2)" />
        </NavDropdownItem>
      </NavDropdownMenu>
    </NavDropdown>
  </div>
);

/**
 * styles
 */
const Profile = styled.div`
  background-color: var(--teal);
  height: 40px !important;
  width: 40px !important;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export default ProfileDropdown;
