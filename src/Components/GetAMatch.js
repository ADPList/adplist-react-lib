import React, { useGlobal, Fragment } from "reactn";
import Skeleton from "react-loading-skeleton-2";
import styled from "styled-components";
import useSWR from "swr";

import NoConnection from "../Icons/NoConnection";
import UserTile from "./UserTile";
import Modal from "./Modal";
import loop from "../Utils/loop";
import { userRoute } from "../Utils/helpers";

const GetAMatch = ({ modal, setModal }) => {
  /**
   * state
   */
  const [initUser = {}] = useGlobal("user");

  /**
   * variables
   */
  const user = initUser[process.env.REACT_APP_MEMBER];
  const expertises = user?.expertise?.map((e) => e.id);
  const languages = user?.languages?.map((l) => l.id);

  const url = (() => {
    let url = `/account/mentor/?offset=0&limit=3&on_break=false&randomize=true&`;

    if (expertises) {
      const ids = expertises.map((id) => id).join(",");
      url = `${url}expertise=${ids}&`;
    }

    if (languages) {
      const ids = languages.map((id) => id).join(",");
      url = `${url}langs=${ids}`;
    }

    return url;
  })();

  /**
   * api
   */
  const { data, errors } = useSWR(modal && url);
  const items = data?.results;

  return (
    <Modal show={modal} onHide={() => setModal(false)} size="full">
      <div className="text-center py-4 py-md-5">
        <p className="font-size-24 font-weight-600 mb-4 line-height-16">
          Mentors matched for you.
        </p>

        <p
          className="mb-5 line-height-16 mx-auto mb-40"
          style={{ maxWidth: 582 }}
        >
          Based on your profile, here are the top {items?.length} mentors that
          matches what you do. We recommend{" "}
          <span className="teal-text">
            scheduling a mentoring session with one of them.
          </span>
        </p>

        <Wrapper>
          {!data && !errors && (
            <Fragment>
              {loop(3).map((index) => (
                <div className="user" key={index}>
                  <Skeleton height={432} />
                </div>
              ))}
            </Fragment>
          )}
          {items && (
            <Fragment>
              {items?.length === 0 && <NoConnection className="mx-auto" />}
              {items?.map((item, key) => (
                <div key={key} className="user">
                  <UserTile
                    key={key}
                    user={item}
                    href={
                      process.env.REACT_APP_ADPLIST_URL +
                      `/${userRoute(process.env.REACT_APP_MENTOR)}/${item.slug}`
                    }
                  />
                </div>
              ))}
            </Fragment>
          )}
        </Wrapper>
      </div>
    </Modal>
  );
};

/**
 * styles
 */
const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
    height: 0px;
    width: 0px;
  }

  .user {
    flex: 0 0 300px;
    text-align: left;
    padding-left: 8px;
    padding-right: 8px;

    &:first-child {
      padding-left: 0px;
    }

    &:last-child {
      padding-right: 0px;
    }
  }

  @media (min-width: 992px) {
    justify-content: center;
  }
`;

export default GetAMatch;
