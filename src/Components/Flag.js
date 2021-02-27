import React from "react";
import flags from "emoji-flags";

const Flag = ({ code, label = "", emoji = false, ...props }) => {
  if (!code) {
    return false;
  }

  const flag = flags.countryCode(code || "");

  if (emoji) {
    return flag.emoji;
  }

  return (
    <span role="img" aria-label={label} {...props}>
      {flag?.emoji}
    </span>
  );
};

export default Flag;
