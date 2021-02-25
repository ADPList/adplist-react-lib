import Confirm from "../Components/Confirm";

export const handleShare = (type, mentor, url, message) => {
  const text = encodeURI(
    message ||
      `I just completed a mentoring session with ${mentor.name} on @ADPList!`,
  );
  const encodedUrl = encodeURI(url);

  switch (type) {
    case "twitter":
      window.open(
        `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${text}&hashtags=adplist,adplistmentorship`,
      );
      break;
    case "linkedin":
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      );
      break;
    default:
      break;
  }
};

export const handleLogin = async (user) => {
  if (!user) {
    if (
      await Confirm({
        confirmation: "You need to login to schedule with mentor",
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
