import { rootState } from "./";

export const login = (state, dispatch, payload) => {
  const { token } = payload;
  localStorage["access_token"] = token.actual;

  // delete token from payload
  delete payload.token;

  return {
    user: { ...payload },
    isAuthenticated: true,
    maskedToken: token.masked,
  };
};

export const logout = () => {
  return rootState;
};

export const setToken = (accessToken) =>
  (localStorage["access_token"] = accessToken);
