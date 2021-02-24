import React, { Fragment } from "react";
import { Formik } from "formik";
import { Container, Row, Col, Form } from "react-bootstrap";

import * as FormFields from "./FormFields";
import Button from "../Button";
import DatePicker from "../DatePicker";
import TimePicker from "../TimePicker";

const SessionForm = ({ header, ...props }) => {

  const handleSubmit = (params, {setSubmitting}) => {
    console.log({params});
  }

  return (
    <Fragment {...props}>
      <Container className="py-4 py-md-5">
        <Row className="justify-content-center mx-auto">
          <Col xs="12" lg="10" xl="9">
            <Row>
              <Col xs="12" lg="6" className="mx-auto">
                {header && (
                  <p className="font-size-20 font-size-md-28 mb-20 font-weight-600">
                    {header.content}
                  </p>
                )}
                <Formik
                validateOnMount
                onSubmit={handleSubmit}
                > {({
                  values: { date },
                  setFieldValue,
                  isSubmitting,
                  handleSubmit,
                  isValid,
                }) => (
                  <Form>
                    <FormFields.SessionName />
                    <FormFields.MeetingURL />
                    <Form.Group className="d-flex justify-content-center justify-content-lg-start">
                      <div className="px-2">
                        <label>Date</label>
                        <DatePicker dateFormat />
                      </div>

                      <div className="px-2">
                        <label>Time</label>
                        <TimePicker timeFormat />
                      </div>
                    </Form.Group>
                    <p className="font-size-14 grey-2-text mb-20 line-height-14">
                      In your timezone. People will see times in <br />
                      their timezones.
                    </p>
                    <FormFields.MaxNumOfAttendees />
                    <FormFields.Description />
                    <p className="font-size-14 grey-2-text mb-20 line-height-14">
                      200 characters remaining
                    </p>
                    <Button
                      type="submit"
                      value="Publish session"
                      className="btn--default px-4"
                    />
                  </Form>
                )}
                </Formik>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default SessionForm;
