import moment from "moment";

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const formattedTime = (dateTime) =>
  dateTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

export const generateDates = (centerDate: Date): Date[] => {
  const datesArray: Date[] = [];
  const month = moment(centerDate).month();
  const year = moment(centerDate).year();
  const firstDay = moment([year, month]).startOf("month").toDate();
  const lastDay = moment([year, month]).endOf("month").toDate();

  for (
    let date = firstDay;
    date <= lastDay;
    date = moment(date).add(1, "days").toDate()
  ) {
    datesArray.push(date);
  }

  return datesArray;
};
