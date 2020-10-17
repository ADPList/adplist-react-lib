import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Fade from "react-fade-in";

import { StyledFooter, BottomFooter } from "./Styles";

import * as Icon from "../../Icons";

const Footer = ({ firstItems, secondItems }) => {
  /**
   * variables
   */
  const socialMedia = [
    {
      icon: Icon.Facebook,
      name: "facebook",
      link: "/",
    },
    {
      icon: Icon.Youtube,
      name: "youtube",
      link: "/",
    },
    {
      icon: Icon.LinkedIn,
      name: "linkedin",
      link: "/",
    },
    {
      icon: Icon.Instagram,
      name: "instagram",
      link: "/",
    },
    {
      icon: Icon.Twitter,
      name: "twitter",
      link: "/",
    },
  ];

  const thirdItems = [
    { name: "Content Ownershp", link: "" },
    { name: "Privacy Policy", link: "" },
    { name: "Terms of use", link: "" },
  ];

  return (
    <Fade bottom>
      <StyledFooter>
        <BottomFooter>
          <Container>
            <Row className="justify-content-between">
              <Col xl="1">
                <Icon.SmileyLogo className="mb-4 mb-xl-0" />
              </Col>
              {firstItems && (
                <Col md="6" lg="12" xl="6">
                  <div className="d-lg-flex links -first mb-5 mb-lg-0">
                    {firstItems?.map(({ name, link }, key) => (
                      <a target={name} href={link} key={key}>
                        {name}
                      </a>
                    ))}
                  </div>
                </Col>
              )}
              {secondItems && (
                <Col md="6" lg="12" xl="5">
                  <div className="d-lg-flex justify-content-xl-end links -second mb-5 mb-lg-0">
                    {secondItems?.map(({ name, link }, key) => (
                      <a target={name} href={link} key={key}>
                        {name}
                      </a>
                    ))}
                  </div>
                </Col>
              )}
            </Row>
            <Row>
              <Col xl="11" className="ml-xl-auto">
                <Row className="justify-content-between flex-column-reverse flex-xl-row">
                  <Col xl="6">
                    <p className="mb-0 grey-2-text font-size-14">
                      Copyright 2020 - Amazing Design People List
                    </p>
                  </Col>
                  {thirdItems && (
                    <Col xl="6">
                      <div className="d-md-flex justify-content-xl-end links -third mb-5 mb-lg-0">
                        {thirdItems?.map(({ name, link }, key) => (
                          <a target={name} href={link} key={key}>
                            {name}
                          </a>
                        ))}
                      </div>
                    </Col>
                  )}
                </Row>
              </Col>
            </Row>

            <div className="border-top grey-4-border mt-3">
              <Row>
                <Col xl="11" className="ml-xl-auto">
                  <Row className="pt-3 justify-content-between">
                    <Col lg="4">
                      <p className="line-height-16 grey-2-text font-size-10 mb-4 mb-lg-0">
                        Our goal is to surface amazing design talents, help
                        folks find new jobs, and help growing startups find top
                        talent ASAP.
                      </p>
                    </Col>
                    <Col lg="6">
                      <div className="d-flex justify-content-lg-end">
                        <div className="d-flex align-items-center">
                          <p className="font-size-10 grey-2-text mr-3 mb-0">
                            Connect:
                          </p>
                          <div className="d-flex align-items-center mx-n1">
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
                </Col>
              </Row>
            </div>
          </Container>
        </BottomFooter>
      </StyledFooter>
    </Fade>
  );
};

export default Footer;
