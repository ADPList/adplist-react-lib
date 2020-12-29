import React, { useGlobal, Fragment } from "reactn";
import {
  Grid,
  Icon,
  Layout,
  Button,
  Profile,
  Socials,
  Confirm,
  UserTile,
  AuthProvider,
} from "adplist-react-lib";
import { ToastContainer } from "react-toastify";
import Skeleton from "react-loading-skeleton-2";

import "adplist-react-lib/dist/index.css";

export default () => {
  const [user] = useGlobal("user");

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
    <Fragment>
      <AuthProvider>
        <Layout
          navItems={{
            router: (link) => {},
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
            },
            inverse: false,
          }}
        >
          <Profile initUser={user} isPrivate isEdit>
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

          <Icon.Twitter variant="default" />
          <Icon.AdpLogo />
          <Icon.AlignLeft />
          <Icon.ArrowRight />
          <Icon.ArrowUpRight />
          <Icon.Badge />
          <Icon.Briefcase />
          <Icon.Close />
          <Icon.Comment />
          <Icon.Copy />
          <Icon.Download />
          <Icon.Edit />
          <Icon.Expertise />
          <Icon.Facebook />
          <Icon.Image />
          <Icon.Instagram variant="default" />
          <Icon.Instagram />
          <Icon.LinkedIn variant="default" />
          <Icon.LinkedIn />
          <Icon.Logo />
          <Icon.MapPointer />
          <Icon.Message />
          <Icon.Moon />
          <Icon.MoreHoriz />
          <Icon.Person color="red" />
          <Icon.Portfolio />
          <Icon.Search />
          <Icon.Smiley />
          <Icon.SmileyLogo />
          <Icon.Sort />
          <Icon.Star />
          <Icon.ThumbsUp />
          <Icon.Twitter />
          <Icon.Upload />
          <Icon.Youtube />

          <UserTile user={user?.mentor} />
        </Layout>
      </AuthProvider>
      <ToastContainer />
    </Fragment>
  );
};
