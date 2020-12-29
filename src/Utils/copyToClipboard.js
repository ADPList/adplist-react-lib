import React from "react";
import { toast } from "react-toastify";
import Notify from "../Components/Notify";

const copyToClipboard = (text) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
    toast(<Notify body="Copied to clipboard" type="success" />);
  }
};

export default copyToClipboard;
