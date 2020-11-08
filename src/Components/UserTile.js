import React from "react";
import styled from "styled-components";

import Briefcase from "../Icons/Briefcase";
import Message from "../Icons/Message";
import Star from "../Icons/Star";
import Flag from "./Flag";

const UserTile = ({ user, router }) => {
  return (
    <Wrapper
      avatar={user?.profile_photo_url || ""}
      className="bg user-tile"
      onClick={router}
    >
      <div className="overlay">
        {user?.total_reviews ? (
          <div className="rating">
            <Star />
            <span className="font-size-14">{user.total_reviews}</span>
          </div>
        ) : (
          ""
        )}

        <div className="details">
          <p className="details__name">
            {user?.name}&nbsp;&nbsp;
            <Flag code={user?.country?.iso} label={user?.country?.name} />
          </p>
          {user?.employer && (
            <p className="details__employer">{user?.employer}</p>
          )}

          <div className="details__items">
            <div className="item">
              <Briefcase />
              <span>
                {user?.expertise
                  ?.map(({ description }) => description)
                  .join(", ")}
              </span>
            </div>
            {user?.topic_of_interests && (
              <div className="item">
                <Message />
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
const Wrapper = styled.div`
  width: 100%;
  height: 432px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;
  background-image: url(${({ avatar }) => avatar || ""});

  .overlay {
    height: 100%;
    display: flex;
    padding: 20px;
    flex-direction: column;
    transition: ease all 0.25s;
    background-image: linear-gradient(
      180deg,
      transparent 36%,
      rgba(0, 0, 0, 0.87)
    );
  }

  .rating {
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
