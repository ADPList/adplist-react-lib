import React from "react";
import { Layout, Project } from "adplist-react-lib";
import { Container, Row, Col } from "react-bootstrap";

export default () => {
  return (
    <Layout
      navItems={{
        items: [
          {
            name: "Explore",
            menu: [{ name: "Adplist", link: "https://adplist.org" }],
          },
          { name: "For mentors", link: "/mentors" },
          { name: "Find projects", link: "/projects" },
        ],
      }}
      footerItems={{
        impact: true,
        newsletter: true,
        firstItems: [
          { name: "hire designers", link: "https://hire.com" },
          { name: "get mentorship", link: "https://hire.com" },
          { name: "find jobs", link: "https://hire.com" },
          { name: "community resources", link: "https://hire.com" },
          { name: "designing for change", link: "https://hire.com" },
        ],
        secondItems: [
          { name: "join adplist", link: "" },
          { name: "community standards", link: "" },
          { name: "partnerships", link: "" },
          { name: "support us", link: "" },
          { name: "get help", link: "" },
        ],
      }}
    >
      <Container>
        <Row>
          <Col sm="4">
            <Project
              progress="50"
              header="Leveraging a Network of Health Workers to Connect Ethiopia’s Hardest-to-Reach Couples"
              caption="The nimble system and compelling message that’s changing the narrative of contraception from taboo to tactical in rural Ethiopia."
              image="/photos/img1.png"
              tag="SDG #4 Quality Eduation"
              lead="Stephen Gates"
              size="md"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
