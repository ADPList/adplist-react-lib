import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { startCase } from "lodash";
import styled from "styled-components";

import { addMentorToWishlist } from "../Services/wishlistService";
import { handleLogin } from "../Utils/helpers";

import Chat from "../Icons/Chat";
import Work from "../Icons/Work";
import Flag from "./Flag";
import Heart from "../Icons/Heart";
import Moon from "../Icons/Moon";

const UserTile = ({ user, href, handleAddToWishlist = () => {} }) => {
  return (
    <Wrapper className="user-tile" target="_blank" href={href}>
      {user?.profile_photo_url && (
        <LazyLoadImage
          width="100%"
          height="100%"
          className="avatar"
          src={user?.profile_photo_url}
        />
      )}
      <div className="overlay">
        <div className="top-items ml-auto">
          {user?.on_break && (
            <div className="on-break">
              <Moon color="#fff" />
              <span className="font-size-14 font-weight-bold">On break</span>
            </div>
          )}

          {user?.total_reviews ? (
            <div className="rating">
              <Chat size={14} variant="filled" color="var(--teal)" />
              <span className="font-size-14">{user.total_reviews}</span>
            </div>
          ) : (
            ""
          )}

          <div className="favorited" onClick={handleAddToWishlist}>
            <Heart
              variant="filled"
              color={
                user?.mentor_in_user_wishlist
                  ? "var(--danger)"
                  : "rgba(19, 19, 19, 0.38)"
              }
            />
          </div>
        </div>

        <div className="details">
          <p className="details__name">
            {startCase(user?.name)}&nbsp;&nbsp;
            <Flag code={user?.country?.iso} label={user?.country?.name} />
          </p>
          {user?.employer && (
            <p className="details__employer">{user?.employer}</p>
          )}

          <div className="details__items">
            {user?.title && (
              <div className="item">
                <Work size={16} color="#fff" />
                <span>{user?.title}</span>
              </div>
            )}
            {user?.topic_of_interests && (
              <div className="item">
                <Chat size={16} color="#fff" />
                <span>
                  {user?.topic_of_interests
                    ?.map(({ description }) => description)
                    .join(", ")}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

/**
 * styles
 */
const Wrapper = styled.a`
  width: 100%;
  height: 432px;
  display: block;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border-radius: 12px;
  text-decoration: none;

  img.avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .overlay {
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 20px;
    position: absolute;
    flex-direction: column;
    transition: ease all 0.25s;
    background-image: linear-gradient(
      180deg,
      transparent 36%,
      rgba(0, 0, 0, 0.87)
    );
  }

  .top-items {
    display: grid;
    grid-auto-flow: column;
    gap: 6px;

    .rating,
    .on-break {
      height: 32px;
      display: flex;
      padding: 0px 8px;
      margin-left: auto;
      border-radius: 6px;
      align-items: center;
      justify-content: center;
      background-color: #fff;

      svg {
        width: 14px;
        height: 14px;
        margin-right: 4px;
      }
    }

    .on-break {
      background: rgba(243, 101, 35, 0.76);
      color: #fff;
    }

    .favorited {
      display: flex;
      align-items: center;

      svg {
        stroke: ${({ mentor_in_user_wishlist }) =>
          mentor_in_user_wishlist ? "#fff" : "#fff"};
        stroke-width: 1.5px;
      }
    }
  }

  .details {
    margin-top: auto;
    color: #fff;

    p {
      margin-bottom: 0px;
    }

    &__name {
      font-weight: 700;
    }

    &__employer {
      font-weight: 500;
      font-size: 14px;
      margin-top: 4px;
    }

    &__items {
      margin-top: 10px;
      .item {
        display: flex;
        font-size: 14px;
        margin-top: 4px;
        line-height: 1.6;

        svg {
          margin-right: 5px;
          flex: 0 0 16px;
          margin-top: 4px;
        }

        &:first-child {
          margin-top: 0px;
        }
      }
    }
  }

  &:hover {
    .overlay {
      transition: ease all 0.25s;
      background-image: linear-gradient(
        174deg,
        transparent 25%,
        rgba(0, 0, 0, 0.78)
      );
    }
  }
`;

export default UserTile;
