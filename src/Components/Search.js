import React, { useState, Fragment, useCallback } from "react";
import { capitalize, debounce } from "lodash";
import * as Lazy from "react-lazy-load-image-component";
import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from "prop-types";
import styled from "styled-components";
import useSWR from "swr";
import Form from "react-bootstrap/Form";

import { userRoute } from "../Utils/helpers";
import Spinner from "./Spinner";
import Badge from "../Icons/Badge";
import flag from "./Flag";

/**
 * props definition
 */
const propTypes = {
  placeholder: PropTypes.string,
};

const defaultProps = {
  router: () => {},
  placeholder: "",
};

const Search = ({
  scrollPosition,
  placeholder,
  inputProps,
  router,
  ...props
}) => {
  /**
   * state
   */
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(null);

  /**
   * api
   */
  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_BASEURL}/account/search-mentor-designer/?${
      search ? `q=${search}&` : ""
    }offset=0&limit=10`,
    { dedupingInterval: 1000 * 60 * 15 },
  );

  const options = (() => {
    if (data) {
      if (data?.results?.length > 0) {
        return data?.results?.map(
          ({
            name,
            slug,
            title,
            country,
            employer,
            profile_photo_url: photo,
            topic_of_interests: interests,
            ...d
          }) => {
            return {
              name,
              slug,
              photo,
              title,
              country,
              employer,
              type: interests
                ? process.env.REACT_APP_MENTOR
                : process.env.REACT_APP_MEMBER,
            };
          },
        );
      } else {
        return [];
      }
    }

    return null;
  })();

  /**
   * function
   */
  const handleRedirect = (data) => router(data);

  const handleSearch = useCallback(
    debounce((value) => setSearch(value), 1000),
    [],
  );

  return (
    <Wrapper {...props}>
      <Group>
        <Control
          placeholder={placeholder}
          onBlur={() => setShow(false)}
          onFocus={() => setShow(true)}
          onChange={({ currentTarget: { value } }) => handleSearch(value)}
          {...inputProps}
        />
      </Group>
      <Menu
        show={show && (!data && !error ? true : options)}
        className="dropdown-menu"
      >
        {!data && !error ? (
          <Item className="d-flex justify-content-center">
            <Spinner size={20} center />
          </Item>
        ) : (
          <Fragment>
            {options?.length > 0 && (
              <Fragment>
                {options.map((option, key) => (
                  <Item key={key} onMouseDown={() => handleRedirect(option)}>
                    <Lazy.LazyLoadImage
                      width={48}
                      height={48}
                      src={option?.photo}
                      className="option__avatar"
                      {...{ scrollPosition }}
                    />
                    <div className="option__info text-truncate">
                      <p className="option__info__name text-truncate">
                        {option.name}&nbsp;&nbsp;
                        {flag({
                          code: option?.country?.iso,
                          emoji: true,
                        })}
                      </p>

                      <p className="option__info__title text-truncate">
                        {`${option?.title}${
                          option?.title && option?.employer ? ", " : ""
                        }`}
                        {option?.employer || ""}
                      </p>
                    </div>
                    <div className="option__type">
                      <span>{capitalize(option?.type)}</span>
                      {option?.type?.toLowerCase() ===
                        process.env.REACT_APP_MENTOR && (
                        <Badge color="var(--teal)" size={20} />
                      )}
                    </div>
                  </Item>
                ))}
              </Fragment>
            )}
            {options?.length === 0 && (
              <Item className="text-center text-body gull-grey-text">
                No options found
              </Item>
            )}
          </Fragment>
        )}
      </Menu>
    </Wrapper>
  );
};

/**
 * styles
 */
const Wrapper = styled.div`
  position: relative;
`;

const Group = styled(Form.Group)`
  margin-bottom: 0px;
`;

const Control = styled(Form.Control)`
  height: auto;
  border: none !important;
  background-color: transparent !important;
`;

const Menu = styled.div`
  padding: 0px;
  border: none;
  margin-top: 8px;
  max-height: 432px;
  position: absolute;
  border-radius: 12px;
  overflow-y: auto !important;
  display: ${({ show }) => (show ? "block" : "none")};
  box-shadow: 0px 0px 20px rgba(167, 169, 192, 0.21);

  @media (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    min-width: 400px;
    max-width: 500px;
  }
`;

const Item = styled(Dropdown.Item)`
  display: flex;
  cursor: pointer;
  padding: 18px 24px;
  align-items: center;

  .option__avatar {
    flex: 0 0 48px;
    object-fit: cover;
    margin-right: 8px;
    border-radius: 50%;
  }

  .option__info {
    font-size: 14px;
    margin-right: 32px;
    flex: 0 0 calc(100% - 80px - 48px - 32px - 8px);

    &__name {
      font-weight: 500;
      line-height: 1.6;
      margin-bottom: 0px;
    }

    &__title {
      line-height: 1.6;
      color: var(--teal);
      margin-bottom: 0px;
    }
  }

  .option__type {
    display: flex;
    font-size: 14px;
    margin-left: auto;
    align-items: center;
    color: var(--grey-2);

    svg {
      margin-left: 5px;
    }
  }

  &:first-child {
    padding-top: 24px;
  }

  &:last-child {
    padding-bottom: 24px;
  }
`;

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Lazy.trackWindowScroll(Search);
