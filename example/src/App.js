import React from "react";
import { Layout, Grid } from "adplist-react-lib";
import { Container, Tab } from "react-bootstrap";

export default () => {
  return (
    <Layout
      navItems={{
        router: (link) => console.log(link),
        items: [
          {
            name: "Explore",
            menu: [
              {
                name: "Adplist",
                link: "https://adplist.org",
                target: "adplist",
              },
              {
                name: "Adplist",
                link: "https://adplist.org",
              },
            ],
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
        <Grid gap="5%" sm="47.5% 47.5%">
          <div className="red-bg p-5" />
          <div className="red-bg p-5" />
        </Grid>
      </Container>
    </Layout>
  );
};
