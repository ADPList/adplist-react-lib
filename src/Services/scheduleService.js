import { Http } from "../Utils";

export const scheduleService = (id, payload) =>
  Http.post(`/account/mentor/${id}/request-mentorship/`, payload);
