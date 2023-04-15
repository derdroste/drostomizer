export const getDay = (date) => {
  return date.toISOString().split("T")[0];
};
