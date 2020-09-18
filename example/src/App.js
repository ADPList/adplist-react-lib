import React from "react";
import { Layout, Grid, Field, Select } from "adplist-react-lib";
import { Container, Form, Tab } from "react-bootstrap";
import { Formik } from "formik";

export default () => {
  return (
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
        impact: true,
        newsletter: true,
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
        <Formik
          validateOnMount
          initialValues={{ full_name: "", expertise: [] }}
        >
          {({
            handleSubmit,
            values: { full_name, expertise },
            setFieldValue,
          }) => (
            <Form>
              <Field
                name="full_name"
                value={full_name}
                placeholder="Full name"
              />
              <Field
                isMulti
                name="expertise"
                value={expertise}
                component={Select}
                options={["a", "b", "c", "d", "e"].map((ar) => ({
                  label: ar,
                  value: ar,
                }))}
                placeholder="Expertise"
                onChange={(options) =>
                  setFieldValue(
                    "expertise",
                    options.map(({ value }) => value),
                  )
                }
              />
            </Form>
          )}
        </Formik>
      </Container>
    </Layout>
  );
};
