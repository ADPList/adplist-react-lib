import Http from "../Utils/Http";

export const addMentorToWishlist = (id) =>
  Http.post(`https://account-service.adpstaging.cloud/mentor/${id}/wishlist/`);
