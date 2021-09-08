function getDate(days) {
  let addDays = require("date-fns/addDays");
  let result = addDays(new Date(2020, 7, 22), days);
  return result;
}
module.exports = getDate;
