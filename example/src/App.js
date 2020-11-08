import React, { useGlobal } from "reactn";
import { AuthProvider, Layout, Grid, Profile } from "adplist-react-lib";
import { Container } from "react-bootstrap";
import Skeleton from "react-loading-skeleton-2";

export default () => {
  const [user] = useGlobal("user");

  return (
    <AuthProvider>
      <Layout
        navItems={{
          router: (link) => console.log(link),
          items: [
            {
              name: "Hello",
              value: "/hi",
            },
            {
              name: "Become a Mentor",
              value: "/hello",
            },
            {
              name: "Hello",
              menu: [
                {
                  name: "Hello",
                  target: "hello",
                  value: "/hi",
                },
              ],
            },
          ],
          search: {
            placeholder: "Hello world",
            handleClick: () => {},
            handleSearch: (value) => console.log(value),
            options: [
              {
                avatar: "",
                type: "mentor",
              },
            ],
          },
          inverse: false,
        }}
      >
        <Container className="py-5">
          <Profile initUser={user}>
            <div className="py-5">
              <Grid sm="1fr" md="repeat(2, 1fr)">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <Skeleton key={index} height={300} />
                ))}
              </Grid>
            </div>
          </Profile>
        </Container>
      </Layout>
    </AuthProvider>
  );
};
