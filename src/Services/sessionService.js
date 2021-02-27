import Http from "../Utils/Http";

export const registerSessionService = (id) =>
  Http.put(`/group-session/${id}/rsvp/`);
