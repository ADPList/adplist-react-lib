import React, { useEffect } from "react";
import { Card, Form } from "react-bootstrap";
import { Formik } from "formik";
import { object, string } from "yup";

import { Confirm, Button, Http, ErrorBoundary, Field } from "adplist-react-lib";
import "adplist-react-lib/dist/index.css";

export default () => {
  const confirm = async () => {
    if (await Confirm({ confirmation: "Hello world" })) {
      alert("Pussy");
    }
  };

  useEffect(() => {
    Http.get("/facebook.com").then(() => {});
  }, []);

  return (
    <ErrorBoundary>
      <Card>
        <Card.Body>
          <Button
            className="btn-48"
            onClick={confirm}
            isValid={true}
            value="Hello world"
          />

          <Formik
            validateOnMount
            initialValues={{
              first_name: "",
              last_name: "",
              email: "",
              password: "",
            }}
            validationSchema={object({
              first_name: string().required("First name is required"),
              last_name: string().required("Last Name is required"),
              email: string()
                .email("Enter a valid email")
                .required("Email is required"),
              password: string().required("Password"),
            })}
            children={(props) => <FormFields {...props} />}
            onSubmit={(params, { setSubmitting }) => {}}
          />
        </Card.Body>
      </Card>
    </ErrorBoundary>
  );
};

function FormFields({ handleSubmit, isValid, isSubmitting, values }) {
  const { first_name, last_name, email, password } = values;
  return (
    <Form>
      <Field name="first_name" value={first_name} label="First Name" />
      <Field name="last_name" value={last_name} label="Last Name" />
      <Field type="email" name="email" value={email} label="Email Address" />
      <Field
        type="password"
        name="password"
        value={password}
        label="Password"
      />
      <Form.Group>
        <Button
          {...{
            isSubmitting,
            isValid,
            value: "Submit",
            type: "submit",
            onClick: handleSubmit,
          }}
        />
      </Form.Group>
    </Form>
  );
}
