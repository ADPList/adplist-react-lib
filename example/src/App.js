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

import "adplist-react-lib/dist/index.css";
import "react-datetime/css/react-datetime.css";

export default () => {
  /**
   * variables
   */
  const user = {
    id: 3,
    username: "larrybuntus@outlook.com",
    name: "Larry Buntus",
    email: "larrybuntus@outlook.com",
    identity_type: "Mentor",
    email_verified_at: "2021-01-22T01:21:34.324306Z",
    designer: null,
    mentor: {
      id: 1,
      name: "Larry Buntus",
      title: "Web Development Lead",
      country: {
        iso: "GH",
        iso3: "GHA",
        iso_numeric: 288,
        fips: "GH",
        name: "Ghana",
        capital: "Accra",
        area: "239460.00",
        population: 29767108,
        continent: "AF",
        tld: ".gh",
        currency_code: "GHS",
        currency_symbol: "₵",
        currency_name: "Cedi",
        phone: "233",
        postal_code_format: null,
        postal_code_regex: null,
        languages: "en-GH,ak,ee,tw",
        geonameid: 2300660,
        neighbours: "CI,TG,BF",
        equivalent_fips_code: null,
      },
      employer: "Qodehub",
      portfolio_url: "https://linkedin.com/larry-buntus",
      calendly_url: "https://calendly.com/larry-buntus",
      years_of_experience: null,
      bio: "Hello. This is me",
      date_joined: "2021-01-22T10:19:11.700976Z",
      date_verified: "2021-02-05T18:49:01.062528Z",
      expertise: [
        {
          id: 1,
          description: "UX Design",
          color_code: "#d231aa",
          disabled: false,
        },
      ],
      languages: [{ id: 1, description: "English", disabled: false }],
      topic_of_interests: [
        {
          id: 1,
          description: "Portfolio Review",
          caption: "Level up with a portfolio review.",
          color_code: "#F88634",
          disabled: false,
          cover_photo:
            "https://adplist-bucket.s3.amazonaws.com/media/topic_of_interest_cover_photos/be916a8c59604a89907052ca5c18aa3a.jpg",
        },
      ],
      profile_photo_url:
        "https://adplist-bucket.s3.amazonaws.com/media/profile_photos/54ecb74aabb147c8827323a897f58d56S3GkA.png",
      swag_image_url:
        "https://hcti.io/v1/image/4bf242e2-14ec-4aee-88cd-7fed6f7fb9e4",
      on_break: false,
      last_break_date: null,
      average_rating: 5,
      total_reviews: 3,
      slug: "larry-buntus",
      shared_on_linkedin: false,
      joined_slack: false,
      fully_setup: false,
      disabled: false,
      identity: 3,
    },
    agreed_to_standards: true,
  };

  const session = {
    date_and_time: new Date(),
    name: "A look into the mind of Larry Buntus 🎉",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam? Maiores voluptatum tempora quas nulla enim est. Sed at quaerat, suscipit veniam itaque saepe dolor sunt doloribus dignissimos eveniet accusamus.",
    mentor: {
      id: 1,
      name: "Larry Dewan Buntus",
      slug: "larry-dewan-buntus",
      profile_photo_url: "https://via.placeholder.com/150",
      title: "Web Developer",
      employer: "Qodehub",
      country: { iso: "GH" },
    },
    rsvp: [
      {
        id: 4,
        name_string: "Samuel Jr. Berkoh",
        profile_photo_url: "https://via.placeholder.com/150",
        slug: "samuel-jr-berkoh",
        identity_type: "Designer",
        agreed_to_standards: false,
      },
    ],
    rsvp_limit: 15,
  };

  /**
   * states
   */
  const [modal, setModal] = useState(true);

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
            search: {
              placeholder: "Hello world",
            },
            inverse: false,
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

              <Icon.LinkedIn />
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
              <Icon.Twitter />

              <Icon.Unlock />
              <Icon.Upload />
              <Icon.Users />

              <Icon.Video />

              <Icon.Wallet />
              <Icon.Work />

              <Icon.Youtube />
            </Grid>

            <GroupSession.Card
              content={session}
              onClick={() => setModal(true)}
            />

            <GroupSession.Modal
              show={modal}
              onHide={() => setModal(false)}
              data={session}
            />
          </Container>
        </Layout>
      </AuthProvider>
      <ToastContainer />
    </Fragment>
  );
};
