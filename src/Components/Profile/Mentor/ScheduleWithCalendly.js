import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { updateAgreeToStandardsService } from "../../../Services/mentorService";
import Button from "../../Button";

const ScheduleWithCalendly = ({ modal, setModal, user }) => {
  /**
   * state
   */
  const [openModal, setOpenModal] = useState(false);

  /**
   * functions
   */
  const handleAgreed = () =>
    setOpenModal(false) | setModal(false) | updateAgreeToStandardsService();

  /**
   * effect
   */
  useEffect(() => {
    if (modal && !openModal) {
      if (user?.agreed_to_standards) {
        window.open(user?.calendly_url);
        setModal(false);
      } else {
        setOpenModal(true);
      }
    }
  }, [modal]);

  return (
    <Modal
      centered
      show={openModal}
      onHide={() => setOpenModal(false) | setModal(false)}
    >
      <Modal.Body className="p-4 p-md-32 p-lg-40">
        <h1 className="font-size-24 mb-3">Before you book</h1>

        <p className="line-height-16 mb-32">
          <span className="d-block mb-4">
            Whether it’s your first time using ADPList or you’re one of our
            original community designers, please commit to respecting the
            mentors and their schedule.{" "}
            <b>
              <a
                target="standards"
                className="teal-text"
                href={process.env.REACT_APP_COMMUNITY_STANDARDS}
              >
                Read more about our Community Standards.
              </a>
            </b>
          </span>
          <span className="d-block">
            I agree to show up for the mentoring sessions I booked, not spam,
            and treat everyone in ADPList community with respect, and without
            judgement or bias.
          </span>
        </p>

        <div className="d-flex">
          <Button
            isValid
            onClick={() => handleAgreed() | window.open(user?.calendly_url)}
            className="teal-bg white-text teal-border mr-3 btn-48 px-5"
          >
            I Agree
          </Button>
          <Button
            isValid
            onClick={() => setModal(false)}
            className="teal-border white-bg teal-text btn-48 px-5"
          >
            I Decline
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ScheduleWithCalendly;
