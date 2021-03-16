import React, { Fragment, useState } from "reactn";
import { Grid, Icon, Layout, AuthProvider, UserTile } from "adplist-react-lib";
import { ToastContainer } from "react-toastify";
import Container from "react-bootstrap/Container";
import useSWR from "swr";

import "adplist-react-lib/dist/index.css";
import "react-datetime/css/react-datetime.css";

export default () => {
  /**
   * variables
   */
  const user = null;
  const session = null;

  /**
   * states
   */
  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState();

  /**
   * api
   */
  const { data, error } = useSWR(`/group-session/?limit=10&offset=0`);
  const items = data?.results;

  const {
    data: gSessions,
    error: sessionError,
    mutate: sessionMutate,
  } = useSWR(details && `/group-session/${items[2]?.slug}`);

  const profile = {
    profile_photo_url:
      "https://adplist-bucket.s3.amazonaws.com/media/profile_photos/f1352d5c9c9d464694ff9b31970816ba1QDtz.png",
    total_reviews: 1,
    country_iso: "GH",
    name: "Abigail Edwin",
    slug: "abigail-edwin",
    on_break: true,
    favorite: false,
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
                link: "/hi",
              },
              {
                name: "Become a Mentor",
                link: "/hello",
              },
              {
                name: "Hello",
                menu: [
                  {
                    name: "Hello",
                    target: "hello",
                    link: "/hi",
                  },
                ],
              },
            ],
            inverse: false,
            search: false,
          }}
        >
          <Container className="py-5">
            <Grid sm="repeat(10, 1fr)" className="align-items-center">
              <Icon.Add />
              <Icon.AdpLogo />
              <Icon.AlignLeft />
              <Icon.ArchiveFull />
              <Icon.ArrowDown />
              <Icon.ArrowForward />
              <Icon.ArrowLeft />
              <Icon.ArrowRight />
              <Icon.ArrowUp />
              <Icon.ArrowUpRight />
              <Icon.ArrowUpSquare />

              <Icon.Badge />

              <Icon.Calendar />
              <Icon.Camera />
              <Icon.Category />
              <Icon.Chat />
              <Icon.Chat variant="filled" />
              <Icon.Chat variant="empty" />
              <Icon.CheckList />
              <Icon.ChevronDown />
              <Icon.ChevronLeft />
              <Icon.ChevronRight />
              <Icon.ChevronUp />
              <Icon.CloseCircle />
              <Icon.CloseSquare />
              <Icon.Copy />

              <Icon.Delete />
              <Icon.Document />
              <Icon.Download />

              <Icon.Edit />

              <Icon.Facebook />
              <Icon.Filter />

              <Icon.Google />

              <Icon.Heart />
              <Icon.Heart variant="filled" color="var(--danger)" />

              <Icon.Hide />
              <Icon.Home />

              <Icon.Image />

              <Icon.Instagram />

              <Icon.LinkedIn variant="default" />
              <Icon.LinkedIn variant="rounded" />
              <Icon.Location />
              <Icon.Logo />

              <Icon.Message />
              <Icon.MessageSquare />
              <Icon.Moon />
              <Icon.MoreHoriz />

              <Icon.Notification />
              <Icon.PaperNegative />
              <Icon.Plus />
              <Icon.Profile />

              <Icon.Search />
              <Icon.Send />
              <Icon.Settings />
              <Icon.Shield />
              <Icon.Shield variant="checked" />
              <Icon.Shield variant="failed" />
              <Icon.Show />
              <Icon.Smiley />
              <Icon.Sort />
              <Icon.Star />
              <Icon.Star variant="outline" />
              <Icon.Swap />

              <Icon.ThumbsUp />
              <Icon.TicketStar />
              <Icon.TickSquare />
              <Icon.Time variant="circle" />
              <Icon.Time variant="square" />
              <Icon.Twitter variant="default" />

              <Icon.Twitter variant="rounded" />

              <Icon.Unlock />
              <Icon.Upload />
              <Icon.Users />

              <Icon.Video />

              <Icon.Wallet />
              <Icon.Work />

              <Icon.Youtube />
            </Grid>

            <UserTile user={profile} />

            {/* {items && (
              <GroupSession.Card
                content={items && items[2]}
                onClick={() => setModal(true) | setDetails(items[2]?.slug)}
              />
            )}

            {items && (
              <GroupSession.Modal
                {...{ sessionMutate }}
                show={modal}
                data={gSessions}
                error={sessionError}
                onHide={() => setModal(false)}
              />
            )} */}
          </Container>
        </Layout>
      </AuthProvider>
      <ToastContainer />
    </Fragment>
  );
};
