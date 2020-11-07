import React, { useState, useGlobal } from "reactn";
import {
  AuthProvider,
  Layout,
  Project,
  Confirm,
  Grid,
  Search,
  UserTile,
  Profile,
  Pagination,
} from "adplist-react-lib";
import { Container } from "react-bootstrap";
import Skeleton from "react-loading-skeleton-2";

export default () => {
  const [selected, setSelected] = useState(null);
  const [user] = useGlobal("user");

  /**
   * functions
   */
  const handleConfirm = async () => {
    if (await Confirm({ confirmation: "Hello world" })) {
    }
  };

  const options = () => {
    let options = [];

    for (let i = 0; i < 10; i++) {
      options.push({
        avatar: "https://via.placeholder.com/150",
        country: {
          name: "USA",
          iso: "US",
        },
        label: `Sasha Shumarayeva - ${i}`,
        expertise: "Software Engineer",
        employer: "Qodehub",
        type: i > 2 ? "Designer" : "Mentor",
        value: `hello-${i}`,
      });
    }

    return options;
  };

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
            options: [],
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
