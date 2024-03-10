// import React, { useState, useEffect } from "react";
// import { View, Text } from "react-native";
import { useStyles } from "react-native-unistyles";
// import { styleSheet } from "./DateTimer.style";

// const DateTimer = () => {
//   const [dateTime, setDateTime] = useState(new Date());

//   const { styles } = useStyles(styleSheet);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setDateTime(new Date());
//     }, 1000); // Update every second

//     return () => clearInterval(intervalId); // Cleanup function to stop timer on unmount
//   }, []);

//   const formattedDate = dateTime.toLocaleDateString("en-US", {
//     day: "2-digit",
//     month: "2-digit",
//     year: "numeric",
//   });
//   const formattedTime = dateTime.toLocaleTimeString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//   });

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>{formattedDate}</Text>
//       <Text style={styles.text}>{formattedTime}</Text>
//     </View>
//   );
// };

// export default DateTimer;

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { styleSheet } from "./DateTimer.style";

const CurrentDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const { styles } = useStyles(styleSheet);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup function to stop timer on unmount
  }, []);

  const months = [
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
  const day = dateTime.getDate(); // Get day as a number
  const month = months[dateTime.getMonth()]; // Use month index to get month name
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDay = weekDays[dateTime.getDay()]; // Get day of the week (Sun, Mon, etc.)

  const formattedDate = `${currentDay}, ${day} ${month}`;
  const formattedTime = dateTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formattedDate}</Text>
      <Text style={styles.text}>{formattedTime}</Text>
    </View>
  );
};

export default CurrentDateTime;
