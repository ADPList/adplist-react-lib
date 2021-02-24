import React from "react";
import { Field, Textarea } from "adplist-react-lib";

export const SessionName = ({ email, ...props }) => (
  <Field
    type="text"
    name="email"
    // value={email}
    label="Session name"
    placeholder="Morning portfolio review"
    disabled
    {...props}
  />
);

export const MeetingURL = ({ url, ...props }) => (
  <Field
    name="name"
    value={url}
    label="Zoom/Meets/Clubhouse URL"
    placeholder=""
    {...props}
  />
);

export const MaxNumOfAttendees = ({ value, ...props }) => (
  <Field
    value={value}
    name="employer"
    placeholder="Max of 50 allowed"
    label="Max attendees in this session"
    {...props}
  />
);

export const Description = ({ value, ...props }) => (
    <Field
      name="bio"
      value={value}
      minRows={6}
      className="py-3"
      label="Description"
      useComponent={false}
      component={Textarea}
      placeholder="Tell people what this session is about"
      {...props}
    />
  );

export const Time = ({ value, ...props }) => (
  <Field
    name="title"
    value={value}
    label="Date"
    placeholder=""
    {...props}
  />
);
