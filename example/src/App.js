import React, { Fragment } from "reactn";
import {
  Layout,
  Profile,
  AuthProvider,
  GroupSession,
  Grid,
  Icon,
} from "adplist-react-lib";
import { ToastContainer } from "react-toastify";
import Container from "react-bootstrap/Container";

import "adplist-react-lib/dist/index.css";
import "react-datetime/css/react-datetime.css";

export default () => {
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
            {/* <Profile initUser={user} /> */}
            {/* <GroupSession.Card
              content={{
                date: "Date here",
                title: "Hello world 🚀",
                avatar: "https://via.placeholder.com/150",
                description:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores tenetur voluptates ducimus. Temporibus autem repudiandae harum soluta at possimus minus numquam consectetur. Est velit temporibus sapiente eaque adipisci, illo magnam.",
                author: "Larry Buntus",
                organisation: "Qodehub",
              }}
            /> */}

            {/* <Formik
              validateOnMount
              initialValues={{
                name: "",
                video_url: "",
                rsvp_limit: "",
                description: "",
              }}
              validationSchema={object({
                name: string().required("Name is required"),
                video_url: string()
                  .url("Invalid url")
                  .required("Url is required"),
                rsvp_limit: number()
                  .typeError("")
                  .required("RSVP limit is required"),
                description: string().required("Description is required"),
              })}
            >
              {({ values: { name, video_url, rsvp_limit, description } }) => (
                <div>
                  <GroupSession.Fields.SessionName value={name} />
                  <GroupSession.Fields.MeetingURL value={video_url} />
                  <GroupSession.Fields.RsvpLimit value={rsvp_limit} />
                  <GroupSession.Fields.Description value={description} />
                </div>
              )}
            </Formik> */}

            {/* <a href="/" onClick={() => alert("Hi is fun")}>
              Click me
            </a> */}
            <Grid sm="repeat(10, 1fr)">
              <Icon.Add size="32" />
              <Icon.AdpLogo size="32" />
              <Icon.AlignLeft size="32" />
              <Icon.ArchiveFull size="32" />
              <Icon.ArrowForward size="32" />
              <Icon.ArrowLeft size="32" />
              <Icon.ArrowRight size="32" />
              <Icon.ArrowUpRight size="32" />
              <Icon.ArrowUpRight size="32" />
              <Icon.ArrowUpSquare size="32" />
              {/* 
              <Icon.Badge size="32" />

              <Icon.Calendar size="32" />
              <Icon.Camera size="32" />
              <Icon.Category size="32" />
              <Icon.Chat size="32" />
              <Icon.CheckList size="32" />
              <Icon.ChevronDown size="32" />
              <Icon.ChevronLeft size="32" />
              <Icon.ChevronRight size="32" />
              <Icon.ChevronUp size="32" />
              <Icon.CloseCircle size="32" />
              <Icon.CloseSquare size="32" />
              <Icon.Copy size="32" />

              <Icon.Delete size="32" />
              <Icon.Document size="32" />
              <Icon.Download size="32" />

              <Icon.Edit size="32" />

              <Icon.Facebook size="32" />
              <Icon.Filter size="32" />

              <Icon.Google size="32" />

              <Icon.Hide size="32" />
              <Icon.Home size="32" />

              <Icon.Image size="32" />

              <Icon.Instagram size="32" />

              <Icon.LinkedIn size="32" />
              <Icon.Location size="32" />
              <Icon.Logo size="32" />

              <Icon.Message size="32" />
              <Icon.MessageSquare size="32" />
              <Icon.Moon size="32" />
              <Icon.MoreHoriz size="32" />

              <Icon.Notification size="32" />
              <Icon.PaperNegative size="32" />
              <Icon.Person size="32" />
              <Icon.Plus size="32" />
              <Icon.Profile size="32" />
              <Icon.Search size="32" />
              <Icon.Send size="32" />
              <Icon.Settings size="32" />
              <Icon.Shield size="32" />
              <Icon.ShieldDone size="32" />
              <Icon.ShieldFail size="32" />
              <Icon.Show size="32" />
              <Icon.Smiley size="32" />
              <Icon.Sort size="32" />
              <Icon.Star size="32" />
              <Icon.Swap size="32" />

              <Icon.ThumbsUp size="32" />
              <Icon.TicketStar size="32" />
              <Icon.TickSquare size="32" />
              <Icon.TimeCircle size="32" />
              <Icon.TimeSquare size="32" />
              <Icon.Twitter size="32" />

              <Icon.Unlock size="32" />
              <Icon.Upload size="32" />
              <Icon.Users size="32" />

              <Icon.Video size="32" />

              <Icon.Wallet size="32" />
              <Icon.Work size="32" />

              <Icon.Youtube size="32" /> */}
            </Grid>
          </Container>
        </Layout>
      </AuthProvider>
      <ToastContainer />
    </Fragment>
  );
};
