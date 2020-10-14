import React from "react";
import flags from "emoji-flags";

const Flag = ({ code, label = "", ...props }) => {
  const flag = flags.countryCode(code);

  return (
    <span role="img" aria-label={label} {...props}>
      {flag?.emoji}
    </span>
  );
};

export default Flag;
