import React from "react";
import { object, string } from "yup";
import { Form, Modal } from "react-bootstrap";
import { Formik } from "formik";
import { toast } from "react-toastify";

import { reportUserService } from "../../../Services/profileService";
import Textarea from "../../Textarea";
import Button from "../../Button";
import Notify from "../../Notify";
import Field from "../../Field";

const ReportProfile = ({ modal, setModal, user, userType }) => {
  /**
   * functions
   */
  const handleSubmit = (params, { setSubmitting, setErrors }) => {
    params = { ...params, [`reported_${userType}_id`]: user.id };

    reportUserService(params)
      .then(
        () =>
          toast(
            <Notify body="Report has been submitted. Account undergoing review" />,
          ) | setModal(false),
      )
      .catch(() => setErrors({ reason: "Unable to submit report" }))
      .finally(() => setSubmitting(false));
  };

  return (
    <Modal centered show={modal} onHide={() => setModal(false)} size="sm">
      <Modal.Body className="p-4">
        <h1 className="font-size-24 line-height-15 mb-2">What's happening?</h1>
        <p className="mb-12">This will only be shared with ADPList.</p>

        <Formik
          validateOnMount
          validationSchema={object({
            reason: string()
              .min(5, "Minimum of 5 characters required")
              .required("Reason is required"),
          })}
          initialValues={{ reason: "" }}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, values: { reason }, isSubmitting, isValid }) => (
            <Form>
              <Field
                minRows={5}
                name="reason"
                value={reason}
                className="py-3"
                component={Textarea}
                useComponent={false}
                placeholder="Offensive language, no-shows, spamming, or something else"
              />
              <Button
                className="teal-bg white-text w-100 btn-64"
                onClick={handleSubmit}
                loading={isSubmitting}
                isValid={isValid}
                type="submit"
              >
                Submit this report
              </Button>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default ReportProfile;
