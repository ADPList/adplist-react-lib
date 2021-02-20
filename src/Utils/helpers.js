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
