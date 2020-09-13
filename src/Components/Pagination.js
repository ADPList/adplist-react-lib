import React from "react";
import Paginate from "react-paginate";
import styled from "styled-components";

const PaginateStyle = styled.div`
  overflow-x: auto;

  ul {
    margin-bottom: 0px;
    list-style: none;
    display: flex;
    padding: 0px;

    li {
      a {
        color: var(--grey-2) !important;
        transition: ease all 0.25s;
        justify-content: center;
        align-items: center;
        padding-right: 9px;
        padding-left: 9px;
        line-height: 20px;
        font-size: 12px;
        display: flex;
        outline: none;
        height: 25px;

        &[aria-disabled="true"] {
          &,
          i {
            color: var(--grey-2);
          }
        }
      }

      &.previous,
      &.next {
        background-color: var(--grey-4);
        border-radius: 50%;
        height: 25px;
        width: 25px;

        a {
          padding: 0px;

          i {
            font-size: 16px;
          }
        }
      }

      &.previous {
        margin-right: 9px;
      }

      &.next {
        margin-left: 9px;
      }

      &.break {
        a {
        }
      }

      &.selected {
        a {
          transition: ease all 0.25s;
          color: var(--teal) !important;
        }
      }
    }
  }
`;

export default function Pagination({
  currentPage = 1,
  totalPages = 16,
  setPage = () => {},
  ...props
}) {
  return (
    <PaginateStyle {...props}>
      <Paginate
        initialPage={currentPage - 1}
        pageCount={totalPages}
        pageRangeDisplayed={3}
        marginPagesDisplayed={0}
        onPageChange={({ selected }) => setPage(selected + 1)}
        nextLabel={<i className="material-icons-round">keyboard_arrow_right</i>}
        previousLabel={
          <i className="material-icons-round">keyboard_arrow_left</i>
        }
      />
    </PaginateStyle>
  );
}
