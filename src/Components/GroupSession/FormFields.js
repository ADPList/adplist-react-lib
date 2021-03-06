import React from "react";
import Textarea from "../Textarea";
import Field from "../Field";
import TimePicker from "../TimePicker";
import DatePicker from "../DatePicker";

export const SessionName = ({ value, ...props }) => (
  <Field
    type="text"
    name="name"
    value={value}
    maxLength="100"
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
    label="Zoom/Meets URL"
    {...props}
  />
);

export const RsvpLimit = ({ value, ...props }) => (
  <Field
    max="100"
    type="number"
    value={value}
    name="rsvp_limit"
    placeholder="Max of 100 allowed"
    label="How many attendees do you expect"
    {...props}
  />
);

export const Description = ({ value, ...props }) => (
  <Field
    minRows={6}
    value={value}
    className="p-3"
    maxLength="200"
    name="description"
    label="Description"
    useComponent={false}
    component={Textarea}
    placeholder="Tell people what this session is about"
    {...props}
  />
);

export const Date = ({ setFieldValue, name, ...props }) => (
  <DatePicker
    placeholderText="DD/MM/YYYY"
    field={{
      name,
    }}
    className="mr-2"
    setFieldValue={setFieldValue}
    {...props}
  />
);

export const Time = ({ setFieldValue, name, ...props }) => (
  <TimePicker
    placeholderText="MM:HH AM"
    field={{
      name,
    }}
    className="mr-2"
    setFieldValue={setFieldValue}
    {...props}
  />
);
