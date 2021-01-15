import React, { Fragment } from "reactn";
import { AuthProvider, Button, Layout, cookie } from "adplist-react-lib";
import { ToastContainer } from "react-toastify";
import { Formik, Field } from "formik";
import { Form } from "react-bootstrap";

import "adplist-react-lib/dist/index.css";

export default () => {
  const handleSubmit = (params, { setSubmitting }) => {
    cookie().setCookie("token", params.token);
    setSubmitting(false);
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
          <Formik initialValues={{ token: "" }} onSubmit={handleSubmit}>
            {({ handleSubmit, values, isValid, isSubmitting }) => (
              <Form>
                <Field label="Token" name="token" value={values.token || ""} />

                <Button
                  className="btn--default px-5"
                  loading={isSubmitting}
                  isValid={isValid}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Layout>
      </AuthProvider>
      <ToastContainer />
    </Fragment>
  );
};
