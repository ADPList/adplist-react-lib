import Http from "../Utils/Http";

export const updateBannerStatusService = (id, payload) =>
  Http.post(`account/mentor/${id}/update-banner-status/`, payload);
