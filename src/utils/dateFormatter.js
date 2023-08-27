import moment from "moment";
export const formatDate = (date) => {
  if (!date) return "";
  return moment(new Date(date).format("DD MMM, YYYY"));
};
