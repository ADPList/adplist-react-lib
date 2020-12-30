import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { StyledFooter, BottomFooter } from "./Styles";

import SmileyLogo from "../../Icons/SmileyLogo";
import LinkedIn from "../../Icons/LinkedIn";
import Youtube from "../../Icons/Youtube";
import Twitter from "../../Icons/Twitter";

const Footer = () => {
  /**
   * variables
   */
  const socialMedia = [
    {
      icon: Youtube,
      name: "youtube",
      link: "https://www.youtube.com/channel/UCEDeB17hbLD_Ius5cnilqSg",
    },
    {
      icon: LinkedIn,
      name: "linkedin",
      link: "https://www.linkedin.com/company/adplist-org/",
    },
    {
      icon: Twitter,
      name: "twitter",
      link: "https://twitter.com/adplist",
    },
  ];

  const firstItems = [
    {
      name: "about us",
      link: "https://www.adplist.org/about",
    },
    {
      name: "find mentors",
      link: `${process.env.REACT_APP_ADPLIST_URL}/mentors`,
    },
    {
      name: "hire designers",
      link: `${process.env.REACT_APP_ADPLIST_URL}/designers`,
    },
    // {
    //   name: "find jobs",
    //   link: `https://www.adplist.org/jobs`,
    // },
  ];

  const secondItems = [
    { name: "join adplist", link: `${process.env.REACT_APP_AUTH_URL}/login` },
    {
      name: "community standards",
      link:
        "https://www.notion.so/ADPList-Community-Standards-48c67f3c7f6740beaef3ddba71b3fd1a",
    },
    { name: "partnerships", link: "mailto: partnership@adplist.org" },
    { name: "support us", link: "mailto: support@adplist.org" },
  ];

  const thirdItems = [
    { name: "Contact us", link: "mailto: support@adplist.org" },
    {
      name: "Privacy Policy",
      link:
        "https://www.notion.so/ADPList-Community-Standards-48c67f3c7f6740beaef3ddba71b3fd1a",
    },
    {
      name: "Terms of use",
      link:
        "https://www.notion.so/ADPList-Community-Standards-48c67f3c7f6740beaef3ddba71b3fd1a",
    },
  ];

  return (
    <StyledFooter>
      <BottomFooter>
        <Container>
          <Row className="justify-content-between">
            <Col xl="1">
              <SmileyLogo className="mb-4 mb-xl-0" />
            </Col>
            <Col lg="5">
              <p className="line-height-16 grey-2-text font-size-14 mb-4 mb-lg-0">
                To inspire powerful conversations and collaborations among
                designers worldwide so together we can change the world with
                creativity.
              </p>
            </Col>
            <Col lg="6">
              <div className="d-flex justify-content-lg-end mb-3 mb-xl-0">
                <div className="d-flex align-items-center">
                  <p className="font-size-12 grey-2-text mr-3 mb-0">Connect:</p>
                  <div className="socials d-flex align-items-center mx-n1">
                    {socialMedia.map((social, key) => (
                      <a
                        key={key}
                        href={social.link}
                        target={social.name}
                        className="d-block text-decoration-none mx-1"
                      >
                        <social.icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <div className="border-top grey-4-border mt-3 mt-lg-32 pt-4 py-lg-4">
            <div className="d-lg-flex justify-content-between">
              <div className="d-lg-flex links -first">
                {firstItems?.map(({ name, link }, key) => (
                  <a target={name} href={link} key={key}>
                    {name}
                  </a>
                ))}
              </div>
              <div className="d-lg-flex links -second">
                {secondItems?.map(({ name, link }, key) => (
                  <a href={link} key={key}>
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="d-lg-flex justify-content-between">
            <p className="grey-2-text font-size-12 mb-4 py-2 py-lg-0 mb-lg-0">
              Copyright 2020 - Amazing Design People List
            </p>
            {thirdItems && (
              <div className="d-md-flex justify-content-lg-end links -third">
                {thirdItems?.map(({ name, link }, key) => (
                  <a target={name} href={link} key={key} className="mb-lg-0">
                    {name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </Container>
      </BottomFooter>
    </StyledFooter>
  );
};

export default Footer;
