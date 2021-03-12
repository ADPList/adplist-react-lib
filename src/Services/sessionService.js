import Http from "../Utils/Http";

export const registerSessionService = (id) =>
  Http.put(`/group-session/${id}/rsvp/`);

export const cancelSessionService = (id) =>
  Http.put(`/group-session/${id}/cancel`);
