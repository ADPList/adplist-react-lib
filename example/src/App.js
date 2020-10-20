import React from "reactn";
import { AuthProvider, Layout, Field, Select, Button } from "adplist-react-lib";
import { Container, Form } from "react-bootstrap";
import { Formik } from "formik";

export default () => {
  return (
    <AuthProvider>
      <Layout
        navItems={{
          inverse: true,
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
          impact: () => {},
          newsletter: () => {},
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
          <Formik initialValues={{ email: "", password: "", type: "" }}>
            {({ values, setFieldValue }) => (
              <Form>
                <Field
                  name="email"
                  type="email"
                  value={values.email}
                  label="Email"
                />
                <Field
                  name="password"
                  type="password"
                  value={values.password}
                  label="Password"
                />

                <Field
                  name="type"
                  label="User Type"
                  component={Select}
                  value={values.type}
                  options={[{ value: "Hi", label: "hi" }]}
                  onChange={({ value }) => setFieldValue("type", value)}
                />

                <Form.Group>
                  <Button
                    className="btn--default w-100"
                    value="Submit"
                    isValid
                  />
                </Form.Group>
              </Form>
            )}
          </Formik>
        </Container>
      </Layout>
    </AuthProvider>
  );
};
