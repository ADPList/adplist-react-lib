import React, { Fragment, useState, useEffect } from "react";
import ReactSelect, { components } from "react-select";
import { capitalize } from "lodash";
import { SyncLoader } from "react-spinners";

import styled from "styled-components";

import { ErrorBoundary } from "../Utils";

import Badge from "../Icons/Badge";
import Flag from "./Flag";

const {
  Option,
  NoOptionsMessage,
  LoadingMessage,
  ValueContainer,
  Placeholder,
} = components;

/**
 * custom components
 * @param {*} param0
 */
const CustomOption = ({ children, data }) => (
  <Fragment>
    <div
      className="option__avatar bg"
      style={{ backgroundImage: `url(${data?.avatar || ""})` }}
    />
    <div className="option__info">
      <div className="option__info__name">
        <p>
          {children}&nbsp;&nbsp;
          <Flag code={data?.country?.iso} label={data?.country?.name} />
        </p>
      </div>

      <div className="option__info__title">
        <p>
          {`${data?.role}${data?.role && data?.employer ? ", " : ""}`}
          {data?.employer || ""}
        </p>
      </div>
    </div>
    <div className="option__type">
      <span>{capitalize(data?.type)}</span>
      {data?.type?.toLowerCase() === "mentor" && <Badge />}
    </div>
  </Fragment>
);

const CustomNoOptionMessage = () => (
  <div className="text-center py-4 grey-2-text">
    No mentor or designer found
  </div>
);

const CustomLoadingMessage = () => (
  <div className="d-flex justify-content-center py-4">
    <SyncLoader margin="10px" color="var(--teal)" size="10px" />
  </div>
);

export default ({ options, value, ...props }) => {
  const [finalOptions, setOption] = useState([]);

  const SelectComponents = {
    MultiValueRemove: () => null,
    LoadingIndicator: () => null,
    DropdownIndicator: () => null,
    IndicatorSeparator: () => null,
    Option: ({ children, ...props }) => (
      <Option {...props} className="option">
        <CustomOption children={children} {...props} />
      </Option>
    ),
    NoOptionsMessage: (props) => (
      <NoOptionsMessage className="p-0" {...props}>
        <CustomNoOptionMessage />
      </NoOptionsMessage>
    ),
    LoadingMessage: (props) => (
      <LoadingMessage className="p-0" {...props}>
        <CustomLoadingMessage />
      </LoadingMessage>
    ),
    ValueContainer: (props) => (
      <ValueContainer className="value-container" {...props} />
    ),
    Placeholder: (props) => (
      <Placeholder className="placeholder text-truncate" {...props} />
    ),
  };

  useEffect(() => {
    if (options && options?.length > 0) {
      setOption(options);
    }
  }, [options, setOption]);

  if (value) {
    value =
      options.find(
        (option) =>
          (option.value || "").toString()?.toLowerCase() ===
            (value || "").toString()?.toLowerCase() || "",
      ) || "";
  }

  return (
    <ErrorBoundary>
      <Select
        {...props}
        styles={styles}
        value={value || ""}
        closeOnSelect={false}
        onSelectResetsInput={false}
        options={finalOptions || []}
        components={SelectComponents}
      />
    </ErrorBoundary>
  );
};

/**
 * styles
 */
const styles = {
  container: (styles) => ({
    ...styles,
    width: "100%",
  }),
  indicatorsContainer: () => ({ padding: 0 }),
  control: (styles, { isFocused }) => ({
    ...styles,
    borderColor: "transparent !important",
    backgroundColor: "transparent",
    borderRadius: "0px",
    boxShadow: "none",
    height: "100%",
  }),
  menuList: () => ({
    paddingBottom: 0,
    overflow: "auto",
    maxHeight: 440,
    paddingTop: 0,
  }),
  menuPortal: (styles) => ({ ...styles, zIndex: 999 }),
  menu: (styles) => ({
    ...styles,
    boxShadow: "0px 0px 20px rgba(167, 169, 192, 0.21) !important",
    border: "none !important",
    backgroundColor: "#fff",
    paddingBottom: "0px",
    overflow: "hidden",
    paddingTop: "0px",
    borderRadius: 12,
    marginBottom: 0,
    maxWidth: 500,
    marginTop: 24,
    zIndex: 999,
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    backgroundColor: (isSelected && "#f5f5f5 !important") || "#fff!important",
    color: "var(--default)",
    outline: "none",
    padding: "0px",
  }),
  multiValue: (styles) => ({ ...styles, borderRadius: 10 }),
  multiValueLabel: (styles) => ({ ...styles, paddingLeft: 8, paddingRight: 8 }),
  valueContainer: (styles) => ({
    ...styles,
    color: "var(--default)",
    padding: "0px",
    height: "100%",
  }),
  placeholder: (styles) => ({ ...styles, color: "#A7A9C0", cursor: "text" }),
};

/**
 * styled component styles
 */
const Select = styled(ReactSelect)`
  .Select-menu-outer {
    z-index: 999;
  }

  .option {
    display: flex;
    cursor: pointer;
    padding: 18px 24px;
    align-items: center;

    &__avatar {
      width: 48px;
      height: 48px;
      flex: 0 0 48px;
      margin-right: 8px;
      border-radius: 50%;
    }

    &__info {
      font-size: 14px;
      margin-right: 32px;

      &__name {
        display: flex;
        flex-wrap: wrap;
        font-weight: 500;
        line-height: 1.6;
        align-items: center;

        p {
          margin-bottom: 0px;
        }
      }

      &__title {
        line-height: 1.6;
        color: var(--teal);
        p {
          margin-bottom: 0px;
        }
      }
    }

    &__type {
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
  }
`;
