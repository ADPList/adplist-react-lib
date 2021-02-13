import Http from "../Utils/Http";

export const updateAgreeToStandardsService = () =>
  Http.put(`/account/user/agree-to-standards/`);
