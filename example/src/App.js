import React, { Fragment, useState } from "reactn";
import {
  Modal,
  Layout,
  Button,
  GetAMatch,
  AuthProvider,
} from "adplist-react-lib";
import { ToastContainer } from "react-toastify";
import Container from "react-bootstrap/Container";

import "adplist-react-lib/dist/index.css";

export default () => {
  const [modal, setModal] = useState(false);

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
          <Container className="py-5">
            <GetAMatch {...{ modal, setModal }} />

            <Button
              isValid
              className="btn--default px-5"
              onClick={() => setModal(true)}
            >
              Large Modal
            </Button>
          </Container>
        </Layout>
      </AuthProvider>
      <ToastContainer />
    </Fragment>
  );
};
