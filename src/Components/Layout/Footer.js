import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
import styled from "styled-components";

import SmileyLogo from "../../Icons/SmileyLogo";
import LinkedIn from "../../Icons/LinkedIn";
import Youtube from "../../Icons/Youtube";
import Twitter from "../../Icons/Twitter";
import { userRoute } from "../../Utils/helpers";

const Footer = () => {
  /**
   * variables
   */
  const socialMedia = [
    {
      icon: Youtube,
      name: "youtube",
      link: process.env.REACT_APP_SOCIAL_YOUTUBE,
    },
    {
      icon: LinkedIn,
      name: "linkedin",
      link: process.env.REACT_APP_SOCIAL_LINKEDIN,
    },
    {
      icon: Twitter,
      name: "twitter",
      link: process.env.REACT_APP_SOCIAL_TWITTER,
    },
  ];

  const firstItems = [
    {
      name: "find mentors",
      link: `${process.env.REACT_APP_ADPLIST_URL}/${userRoute(
        process.env.REACT_APP_MENTOR,
      )}`,
    },
  ];

  const secondItems = [
    {
      name: "join adplist",
      link: `${process.env.REACT_APP_AUTH_URL}/login`,
      external: true,
    },
    {
      name: "community standards",
      link: process.env.REACT_APP_COMMUNITY_STANDARDS,
      external: true,
    },
    { name: "partnerships", link: "mailto: partnership@adplist.org" },
    {
      name: "support us",
      link: process.env.REACT_APP_SOCIAL_SUPPORT,
      external: true,
    },
  ];

  const thirdItems = [
    { name: "Contact us", link: "mailto: support@adplist.org" },
    {
      name: "Privacy Policy",
      link: process.env.REACT_APP_PRIVACY_POLICY,
      external: true,
    },
    {
      name: "Terms of use",
      link: process.env.REACT_APP_TERMS_AND_CONDITIONS,
      external: true,
    },
  ];

  return (
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
              {firstItems?.map(({ name, link, external }, key) => (
                <a
                  key={key}
                  href={link}
                  target={name}
                  {...(external && { target: "_black" })}
                >
                  {name}
                </a>
              ))}
            </div>
            <div className="d-lg-flex links -second">
              {secondItems?.map(({ name, link, external }, key) => (
                <a
                  key={key}
                  href={link}
                  {...(external && { target: "_blank" })}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="d-lg-flex justify-content-between">
          <p className="grey-2-text font-size-12 mb-4 py-2 py-lg-0 mb-lg-0">
            Copyright {moment().format("YYYY")} - Amazing Design People List
          </p>
          {thirdItems && (
            <div className="d-md-flex justify-content-lg-end links -third">
              {thirdItems?.map(({ name, link, external }, key) => (
                <a
                  key={key}
                  href={link}
                  target={name}
                  className="mb-lg-0"
                  {...(external && { target: "_blank" })}
                >
                  {name}
                </a>
              ))}
            </div>
          )}
        </div>
      </Container>
    </BottomFooter>
  );
};

/**
 * styles
 */
export const BottomFooter = styled.div`
  background-color: var(--grey-4);
  padding-bottom: 32px;
  padding-top: 32px;
  margin-top: auto;

  .socials {
    a {
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }

  .links {
    margin-left: -10px;
    margin-right: -10px;

    a {
      color: var(--default);
      margin-bottom: 32px;
      margin-right: 10px;
      margin-left: 10px;
      display: block;
    }

    &.-first {
      font-weight: 600;

      a {
        color: var(--default);
        display: block;
      }
    }

    &.-second {
      a {
        color: var(--default);
        font-size: 14px;
        display: block;
      }
    }

    &.-third {
      a {
        text-decoration: underline;
        color: var(--grey-2);
      }
    }
  }

  @media (min-width: 992px) {
    .links {
      a {
        margin-bottom: 0px;
      }
    }
  }
`;

export default Footer;
