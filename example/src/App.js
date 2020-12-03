import React, { useGlobal, useState } from "reactn";
import {
  Grid,
  Layout,
  Button,
  Profile,
  Socials,
  Confirm,
  UserTile,
  AuthProvider,
} from "adplist-react-lib";
import { Container } from "react-bootstrap";
import Skeleton from "react-loading-skeleton-2";
import useSWR from "swr";

export default () => {
  const [user] = useGlobal("user");
  const [search, setSearch] = useState(null);

  const { data: searchData } = useSWR(
    `https://adplist-backend.herokuapp.com/account/search-mentor-designer/?q=${
      search || ""
    }&limit=15&offset=0`,
  );

  const handleConfirm = async () => {
    if (
      await Confirm({
        confirmation: "Hello world",
        buttons: { cancel: { value: "Cunt", className: "d-none" } },
      })
    ) {
    }
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
            handleSearch: (value) => setSearch(value),
            options:
              searchData?.results?.map((s) => ({
                slug: s?.slug,
                avatar: s?.profile_photo_url || "",
                country: { iso: s?.country?.iso, name: s?.country?.name },
                employer: s?.employer,
                expertise: s?.expertise[0]?.description,
                type: s?.topic_of_interests ? "mentor" : "designer",
                label: s?.name,
              })) || [],
          },
          inverse: false,
        }}
      >
        <Profile initUser={user}>
          <div className="py-5">
            <Grid sm="1fr" md="repeat(2, 1fr)">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Skeleton key={index} height={300} />
              ))}
            </Grid>

            <Socials url="https://larrybuntus.com" />
          </div>
        </Profile>

        <Button className="btn--default" isValid onClick={handleConfirm}>
          Hello
        </Button>

        <UserTile
          user={{
            on_break: false,
            total_reviews: 5,
            name: "Larry Buntus",
            country: { iso: "GH", name: "Ghana" },
          }}
        />
      </Layout>
    </AuthProvider>
  );
};
