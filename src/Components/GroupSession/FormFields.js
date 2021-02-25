import React from "react";
import Textarea from "../Textarea";
import Field from "../Field";

export const SessionName = ({ value, ...props }) => (
  <Field
    name="name"
    value={value}
    label="Session name"
    placeholder="Morning portfolio review"
    {...props}
  />
);

export const MeetingURL = ({ value, ...props }) => (
  <Field
    type="url"
    value={value}
    name="video_url"
    label="Zoom/Meets/Clubhouse URL"
    {...props}
  />
);

export const RsvpLimit = ({ value, ...props }) => (
  <Field
    type="number"
    value={value}
    name="rsvp_limit"
    placeholder="Max of 50 allowed"
    label="Max attendees in this session"
    {...props}
  />
);

export const Description = ({ value, ...props }) => (
  <Field
    name="bio"
    minRows={6}
    value={value}
    className="p-3"
    label="Description"
    useComponent={false}
    component={Textarea}
    placeholder="Tell people what this session is about"
    {...props}
  />
);

export const Time = ({ value, ...props }) => (
  <Field name="title" value={value} label="Date" placeholder="" {...props} />
);
