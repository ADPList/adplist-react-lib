import React from "react";
import { object, string } from "yup";
import { Form, Modal } from "react-bootstrap";
import { Formik } from "formik";
import styled from "styled-components";

import Textarea from "../Textarea";
import Button from "../Button";
import Field from "../Field";
import { scheduleService } from "../../Services/scheduleService";
import { toast } from "react-toastify";
import Notify from "../Notify";

const ScheduleWithEmail = ({ modal, setModal, user }) => {
  return (
    <Modal centered show={modal} onHide={() => setModal(false)} size="sm">
      <Modal.Body className="px-4 py-32">
        <h1 className="font-size-24 mb-2">
          Introduce Yourself to {user?.name}
        </h1>
        <p className="line-height-15 mb-3">
          Giving your mentor more information will help them know you better and
          have a productive mentoring session.
        </p>

        <List>
          <li>Tell your mentor a little about yourself</li>
          <li>What brings you to this mentoring session?</li>
          <li>How can this mentor help you?</li>
        </List>

        <Formik
          validateOnMount
          initialValues={{ message: "" }}
          validationSchema={object({
            message: string().min(10).required("Message is required"),
          })}
          onSubmit={(params, { setSubmitting }) =>
            scheduleService(user.id, params)
              .then(() =>
                toast(
                  (
                    <Notify
                      body={`Awesome. We are sending your message to ${user.name}`}
                    />
                  ) | setModal(false),
                ),
              )
              .catch(() => setSubmitting(false))
          }
        >
          {({
            isValid,
            handleSubmit,
            values: { message },
            isSubmitting: loading,
          }) => (
            <Form>
              <Field
                placeholder="Want a portfolio review? Career advice? This helps your mentor plan for your session."
                component={Textarea}
                useComponent={false}
                className="py-3"
                value={message}
                name="message"
                minRows={5}
              />
              <Button
                type="submit"
                onClick={handleSubmit}
                className="teal-bg white-text teal-border btn-60 w-100"
                {...{ isValid, loading }}
              >
                Send schedule request
              </Button>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

const List = styled.ul`
  margin-bottom: 1.5rem;
  padding-left: 1rem;

  li {
    margin-bottom: 12px;

    &::marker {
      font-size: 20px;
    }

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

export default ScheduleWithEmail;
