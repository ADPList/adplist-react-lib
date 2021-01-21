import React from "react";
import styled from "styled-components";
import ReactSelect from "react-select";

import { ErrorBoundary } from "../Utils";

/**
 * styles
 */
const styles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    borderColor: isFocused
      ? "var(--black) !important"
      : "var(--grey-3) !important",
    backgroundColor: "var(--grey-4)",
    borderRadius: "10px",
    boxShadow: "none",
    height: "100%",
  }),
  menuList: () => ({
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "auto",
    maxHeight: 200,
  }),
  menuPortal: (styles) => ({ ...styles, zIndex: 999 }),
  menu: (styles) => ({
    ...styles,
    boxShadow: "0 0px 8px 0 rgba(0, 0, 0, 0.12) !important",
    border: "none !important",
    backgroundColor: "#fff",
    paddingBottom: "8px",
    paddingTop: "8px",
    zIndex: 999,
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    backgroundColor: (isSelected && "#f5f5f5 !important") || "#fff!important",
    outline: "none",
    color: "#000",
  }),
  multiValue: (styles) => ({ ...styles, borderRadius: 10 }),
  multiValueLabel: (styles) => ({ ...styles, paddingLeft: 8, paddingRight: 8 }),
  valueContainer: (styles) => ({
    ...styles,
    height: "100%",
    padding: "0px 18px",
    flexWrap: "nowrap",
  }),
  indicatorsContainer: (styles) => ({ ...styles, paddingRight: 6 }),
};

const Select = styled(ReactSelect)`
  .Select-menu-outer {
    z-index: 999;
  }
`;

export default ({ options, onlyOptions, value, ...props }) => {
  const SelectComponents = {
    MultiValueRemove: () => null,
    IndicatorSeparator: () => null,
  };

  let _options = options;
  let _value = "";

  if (onlyOptions) {
    _options = options.filter(
      (option) =>
        !!onlyOptions.find(
          (_option) => _option?.toLowerCase() === option.value?.toLowerCase(),
        ),
    );
  }

  if (value) {
    if (!Array.isArray(value)) {
      _value =
        options.find(
          (option) =>
            (option.value || "").toString()?.toLowerCase() ===
              (value || "").toString()?.toLowerCase() || "",
        ) || "";
    }

    if (Array.isArray(value)) {
      _value = options.filter((option) =>
        value?.map((v) => String(v)).includes((option.value || "").toString()),
      );
    }
  }

  return (
    <ErrorBoundary>
      <Select
        {...props}
        value={_value}
        styles={styles}
        options={_options}
        closeOnSelect={false}
        onSelectResetsInput={false}
        components={SelectComponents}
      />
    </ErrorBoundary>
  );
};
