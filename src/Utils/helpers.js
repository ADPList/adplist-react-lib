import moment from "moment-timezone";
import Confirm from "../Components/Confirm";

export const handleShare = (type, mentor, url, message) => {
  import("node-url-shortener").then((shortUrl) => {
    /**
     * variables
     */
    const text = encodeURI(
      message ||
        `I just completed a mentoring session with ${mentor.name} on @ADPList!`,
    );

    url = ((url) => {
      if (url.includes("?")) return `${url}&`;
      return `${url}?`;
    })(url);

    switch (type) {
      case "twitter":
        url = `${url}utm_source=twittershare&utm_medium=adplistTwittershare&utm_campaign=ADPlistTwitterSharing`;
        break;
      case "linkedin":
        url = `${url}utm_source=linkedinshare&utm_medium=adplistLinkedInshare&utm_campaign=ADPlistLinkedInSharing`;
      default:
        break;
    }

    shortUrl.short(url, (err, shortenedUrl) => {
      let newUrl = "";

      if (shortenedUrl) newUrl = shortenedUrl;
      else newUrl = url;

      if (type === "twitter")
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            shortenedUrl,
          )}&text=${text}&hashtags=adplist,adplistmentorship`,
        );

      if (type === "linkedin")
        window.open(
          `https://www.linkedin.com/shareArticle/?mini=true&url=${encodeURIComponent(
            shortenedUrl,
          )}`,
        );
    });
  });
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

export const handleTimezone = (datetime, format, timezone) => {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  if (timezone) {
    datetime = moment.tz(datetime, timezone);
    return datetime.clone().tz(tz).format(format);
  } else {
    return moment(datetime).tz(tz).format(format);
  }
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
