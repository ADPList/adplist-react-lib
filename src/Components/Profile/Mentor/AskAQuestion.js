import React from "react";
import { object, string } from "yup";
import { Modal, Form } from "react-bootstrap";
import { Formik } from "formik";
import { toast } from "react-toastify";

import { Http } from "../../../Utils";
import Textarea from "../../Textarea";
import Button from "../../Button";
import Notify from "../../Notify";
import Field from "../../Field";

const AskAQuestion = ({ user, modal, setModal }) => {
  return (
    <Modal show={modal} onHide={() => setModal(false)} centered>
      <Modal.Body className="p-4">
        <h2 className="font-size-24 line-height-13 mb-2 font-weight-600">
          Ask a question
        </h2>
        <p className="line-height-16 mb-3">
          Giving your mentor more information will help them know you better and
          have a meaningful conversation around your question.
        </p>
        <div className="mb-4">
          {[
            "Tell your mentor a little about yourself",
            "What’s your question today?",
            "How can this mentor help you?",
          ].map((item, key) => (
            <p key={key} className="line-height-13 mb-2">
              • {item}
            </p>
          ))}
        </div>

        <Formik
          validateOnMount
          initialValues={{ message: "" }}
          validationSchema={object({
            message: string().required("Message is required"),
          })}
          onSubmit={(params, { setSubmitting }) => {
            Http.post(`/account/mentor/${user.id}/ask-a-question/`, params)
              .then(
                () =>
                  toast(
                    <Notify
                      body="Email has been sent to mentor. Thanks"
                      type="success"
                    />,
                  ) | setModal(false),
              )
              .catch(() =>
                toast(<Notify body="Unable to send email" type="error" />),
              )
              .finally(() => setSubmitting(false));
          }}
        >
          {({ handleSubmit, isValid, isSubmitting, values: { message } }) => (
            <Form>
              <Field
                minRows={8}
                name="message"
                className="p-3"
                value={message}
                component={Textarea}
                useComponent={false}
                placeholder="What would you like to know? Portfolio review, career advice, leadership, and more."
              />

              <Button
                type="submit"
                isValid={isValid}
                loading={isSubmitting}
                onClick={handleSubmit}
                className="teal-bg teal-border w-100 btn-60 white-text"
              >
                Ask question
              </Button>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default AskAQuestion;
