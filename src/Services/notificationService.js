import Http from "../Utils/Http";

export const updateNotificationSeenService = (id) =>
  Http.put(`${process.env.REACT_APP_MESSAGING_BASEURL}/notification/${id}/`, {
    seen: true,
  });
