import React, { useGlobal } from "reactn";
import { AuthProvider, Layout, Profile } from "adplist-react-lib";
import { Container } from "react-bootstrap";

export default () => {
  const [user] = useGlobal("user");

  return (
    <AuthProvider>
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
          impact: () => {},
          newsletter: () => {},
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
        <Container className="py-5">
          <Profile initUser={user} isEdit isPrivate>
            <h1>Pussy Pussy Pussy Pussy Pussy Pussy Pussy Pussy</h1>
          </Profile>
        </Container>
      </Layout>
    </AuthProvider>
  );
};
