import React from "react";
import styled from "styled-components";

import Facebook from "../Icons/Facebook";
import LinkedIn from "../Icons/LinkedIn";
import Twitter from "../Icons/Twitter";

const Grid = styled.div`
  display: flex;
  margin: 0px -8px;
  align-items: center;

  div {
    padding-left: 8px;
    padding-right: 8px;

    a {
      display: block;
    }
  }
`;

const Socials = ({
  links = ["facebook", "linkedin", "twitter"],
  size = 24,
  url,
  ...props
}) => {
  /**
   * variables
   */
  const arr = [
    {
      name: "facebook",
      icon: Facebook,
      url: "https://www.facebook.com/sharer.php?u=",
    },
    {
      name: "linkedin",
      icon: LinkedIn,
      url: "https://www.linkedin.com/sharing/share-offsite/?url=",
    },
    {
      name: "twitter",
      icon: Twitter,
      url: "https://twitter.com/intent/tweet?url=",
    },
  ];

  return (
    <Grid {...props}>
      {links?.map((link, key) => {
        const ar = arr.find((ar) => link?.toLowerCase() === ar.name);

        if (ar) {
          return (
            <div key={key}>
              <a href={ar.url + url} target={ar.name}>
                <ar.icon height={size} width={size} />
              </a>
            </div>
          );
        }
        return false;
      })}
    </Grid>
  );
};

export default Socials;
