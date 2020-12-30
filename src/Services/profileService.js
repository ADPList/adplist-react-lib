import Http from "../Utils/Http";

export const updateBannerStatusService = (id, payload) =>
  Http.post(`account/mentor/${id}/update-banner-status/`, payload);

export const scheduleService = (id, payload) =>
  Http.post(`/account/mentor/${id}/request-mentorship/`, payload);

export const reportUserService = (payload) =>
  Http.post(`/account/user/reported-profile/`, payload);
