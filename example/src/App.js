import React, { Fragment } from "reactn";
import { AuthProvider, PageNotFound, Layout, cookie } from "adplist-react-lib";
import { ToastContainer } from "react-toastify";

import "adplist-react-lib/dist/index.css";

export default () => {
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
          <PageNotFound route={() => {}} />
        </Layout>
      </AuthProvider>
      <ToastContainer />
    </Fragment>
  );
};
