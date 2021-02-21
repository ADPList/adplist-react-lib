import { addCallback, setGlobal, addReducer } from "reactn";
import * as auth from "./auth";
/**
 * variables
 */
const rootKey = process.env.REACT_APP_ROOT_KEY;

/**
 * states
 */
export const rootState = {
  isAuthenticated: true,
  user: {
    id: 2,
    username: "larrybuntus@gmail.com",
    name: "Larry Buntus",
    email: "larrybuntus@gmail.com",
    identity_type: "Mentor",
    email_verified_at: "2021-01-21T19:14:27.401702Z",
    mentor: {
      id: 1,
      name: "Larry Buntus",
      title: "Web Development Lead",
      country: {
        iso: "AF",
        iso3: "AFG",
        iso_numeric: 4,
        fips: "AF",
        name: "Afghanistan",
        capital: "Kabul",
        area: "647500.00",
        population: 37172386,
        continent: "AS",
        tld: ".af",
        currency_code: "AFN",
        currency_symbol: "؋",
        currency_name: "Afghani",
        phone: "93",
        postal_code_format: null,
        postal_code_regex: null,
        languages: "fa-AF,ps,uz-AF,tk",
        geonameid: 1149361,
        neighbours: "TM,CN,IR,TJ,PK,UZ",
        equivalent_fips_code: null,
      },
      employer: "Qodehub",
      portfolio_url: null,
      years_of_experience: null,
      interested_in_remote: false,
      looking_for: null,
      date_joined: "2021-01-22T00:55:32.790733Z",
      expertise: [
        {
          id: 1,
          description: "UX Design",
          color_code: "#d231aa",
          disabled: false,
        },
      ],
      languages: [{ id: 1, description: "English", disabled: false }],
      profile_photo_url:
        "https://adplist-bucket.s3.amazonaws.com/media/profile_photos/395cdd9462144a3b8838a84d6ba0cc0bUmvDM.png",
      bio: null,
      open_to_work: true,
      slug: "larry-buntus",
      identity: 2,
    },
    designer: null,
    agreed_to_standards: true,
  },
  accessToken: null,
};

/**
 * reducers
 */
const reducers = {
  "auth.login": auth.login,
  "auth.logout": auth.logout,
};

/**
 * store all global states in localStorage for persistence
 * @param {*} global
 */
export function handleChange(global) {
  /**
   * push global states to localStorage
   */
  const newState = JSON.stringify(global);
  localStorage[rootKey] = newState;
}

export default function handle() {
  const states = localStorage[rootKey]
    ? JSON.parse(localStorage[rootKey])
    : rootState;
  /**
   * set global variables
   */
  setGlobal(states);

  /**
   * set reducers
   */
  Object.entries(reducers).map(([key, val]) => addReducer(key, val));

  /**
   * when updates are done to global store, callback function is fired
   */
  addCallback(handleChange);

  return true;
}
