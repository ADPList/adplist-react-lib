import React, { Fragment, useState } from "reactn";
import {
  Grid,
  Icon,
  Layout,
  Profile,
  AuthProvider,
  GroupSession,
} from "adplist-react-lib";
import { ToastContainer } from "react-toastify";
import Container from "react-bootstrap/Container";
import useSWR from "swr";

import "adplist-react-lib/dist/index.css";
import "react-datetime/css/react-datetime.css";
import { Form } from "react-bootstrap";

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

  /**
   * api
   */
  const { data, error } = useSWR(`/group-session/?limit=10&offset=0`);
  const items = data?.results;

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
            <Profile initUser={user} />

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

            {items && (
              <GroupSession.Card
                content={items && items[0]}
                onClick={() => setModal(true)}
              />
            )}

            {items && (
              <GroupSession.Modal
                show={modal}
                onHide={() => setModal(false)}
                data={items && items[0]}
              />
            )}
            <Icon.Document />
          </Container>
        </Layout>
      </AuthProvider>
      <ToastContainer />
    </Fragment>
  );
};
