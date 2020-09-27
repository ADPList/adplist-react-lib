import React from "reactn";
import {
  Layout,
  useCookie,
  Button,
  Grid,
  Field,
  AuthProvider,
} from "adplist-react-lib";
import { Container, Form } from "react-bootstrap";
import { object, string } from "yup";
import { Formik } from "formik";

export default () => {
  const { setCookie, getCookie, deleteCookie } = useCookie();

  return (
    <AuthProvider>
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
            initialValues={{ key: "", value: "", type: "" }}
            validationSchema={object({
              key: string().required("Item is required"),
              type: string().required("Type is required"),
            })}
            onSubmit={(params, { setFieldValue }) => {
              if (params.type === "get") {
                const value = getCookie(params.key);
                console.log(value);
              }

              if (params.type === "set") {
                if (params.key && params.value) {
                  setCookie(params.key, params.value);
                  console.log(document.cookie);
                }
              }

              if (params.type === "delete") {
                if (params.key) {
                  deleteCookie(params.key);
                  console.log(document.cookie);
                }
              }
            }}
          >
            {({ handleSubmit, values: { key, value }, setFieldValue }) => (
              <Form style={{ maxWidth: 400 }} className="mx-auto">
                <Field name="key" value={key} label="Enter Key" />
                <Field name="value" value={value} label="Enter Value" />
                <Grid
                  gap="32px"
                  sm="auto auto auto"
                  className="justify-content-center"
                >
                  <Button
                    isValid
                    value="Set Cookie"
                    className="btn--default px-5"
                    onClick={() => {
                      setFieldValue("type", "set");
                      handleSubmit();
                    }}
                  />
                  <Button
                    isValid
                    value="Get Cookie"
                    className="btn--default-reverse px-5"
                    onClick={() => {
                      setFieldValue("type", "get");
                      handleSubmit();
                    }}
                  />
                  <Button
                    isValid
                    value="Delete Cookie"
                    className="btn--default-reverse px-5"
                    onClick={() => {
                      setFieldValue("type", "delete");
                      handleSubmit();
                    }}
                  />
                </Grid>
              </Form>
            )}
          </Formik>
        </Container>
      </Layout>
    </AuthProvider>
  );
};
