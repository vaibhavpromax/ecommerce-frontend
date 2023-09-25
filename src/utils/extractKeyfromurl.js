export const extractKeyfromurl = (url) => {
  if (!url) return "";
  const parts = url.split("/");
  const objectKey = parts[parts.length - 1];
  return objectKey;
};
