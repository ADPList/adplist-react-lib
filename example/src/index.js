import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { SWRConfig } from "swr";
import { Http } from "adplist-react-lib";

import reducer from "./Reducers";
import App from "./App";

reducer();

ReactDOM.render(
  <SWRConfig
    value={{
      fetcher: (url) => Http.get(url).then((data) => data),
      dedupingInterval: 1000 * 60 * 15,
      shouldRetryOnError: false,
      revalidateOnFocus: false,
      errorRetryInterval: 0,
      errorRetryCount: 2,
    }}
  >
    <App />
  </SWRConfig>,
  document.getElementById("root"),
);
