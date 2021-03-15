import moment from "moment-timezone";
import Confirm from "../Components/Confirm";

export const handleShare = (type, mentor, url, message) => {
  /**
   * variables
   */
  const text = encodeURI(
    message ||
      `I just completed a mentoring session with ${mentor.name} on @ADPList!`,
  );
  const encodedUrl = encodeURIComponent(url);
  url = ((url) => {
    if (url.includes("?")) return `${encodedUrl}&`;
    return `${encodedUrl}?`;
  })(url);

  const linkedinEncodedUrl = encodeURIComponent("ADPlist LinkedIn Sharing");
  const twitterEncodedUrl = encodeURIComponent("ADPlist Twitter Sharing");

  switch (type) {
    case "twitter":
      window.open(
        `https://twitter.com/intent/tweet?url=${url}utm_source=twittershare&utm_medium=adplistTwittershare&utm_campaign=${twitterEncodedUrl}&text=${text}&hashtags=adplist,adplistmentorship`,
      );
      break;
    case "linkedin":
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${url}utm_source=linkedinshare&utm_medium=adplistLinkedInshare&utm_campaign=${linkedinEncodedUrl}`,
      );
      break;
    default:
      break;
  }
};

export const handleLogin = async (user, message) => {
  if (!user) {
    if (
      await Confirm({
        confirmation: message,
        buttons: { proceed: { value: "Login" } },
      })
    ) {
      if (typeof window !== "undefined") {
        window.open(process.env.REACT_APP_AUTH_URL + "/login?app=adplist");
      }

      return false;
    }

    return false;
  } else {
    if (user?.identity_type?.toLowerCase() === "limbo") {
      if (typeof window !== "undefined")
        window.location.href = process.env.REACT_APP_AUTH_URL;

      return false;
    }
  }

  return true;
};

export const handleTimezone = (datetime, format) => {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return moment(datetime).tz(tz).format(format);
};

export const userRoute = (type) => {
  switch (type) {
    case process.env.REACT_APP_MEMBER:
      return "members";
    case process.env.REACT_APP_MENTOR:
      return "mentors";
    default:
      break;
  }
};

export const handleIntercom = (event = "show") => {
  if (typeof window !== "undefined") {
    window.Intercom(event);
  }
};
