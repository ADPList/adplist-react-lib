import React, { useState } from "reactn";
import {
  AuthProvider,
  Layout,
  Project,
  Confirm,
  Grid,
  Search,
  UserTile,
} from "adplist-react-lib";
import { Container } from "react-bootstrap";

export default () => {
  const [selected, setSelected] = useState(null);

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
          inverse: true,
        }}
      >
        <Container className="py-5">
          <div className="mb-5">
            <Search
              value={selected}
              options={options()}
              placeholder="Hello world"
            />
          </div>
          <Grid sm="1fr" md="repeat(2, 1fr)" lg="repeat(3, 1fr)">
            <Project
              lead="Hello"
              clamp="2"
              clampHeight="64"
              edit={() => {}}
              onClick={handleConfirm}
              header="Rapping in the ghetto with the niggas in the hoodie and the window of the killer is opened can be dangerous"
            />
            <UserTile
              user={{
                name: "Larry Buntus",
                country: { name: "USA", iso: "US" },
                profile_photo:
                  "https://assets-global.website-files.com/5e9b19844c5ff94d9abdebde/5f989652160d1380096a0983_IMG_0038_edited%20-%20Kelley%20Brown.jpg",
                employer: "Qodehub",
                expertise: [{ description: "UX Design" }],
                topic_of_interests: [
                  { description: "Buttocks" },
                  { description: "Cunts" },
                  { description: "Cunts" },
                  { description: "Cunts" },
                  { description: "Cunts" },
                  { description: "Cunts" },
                ],
              }}
            />
          </Grid>
        </Container>
      </Layout>
    </AuthProvider>
  );
};
