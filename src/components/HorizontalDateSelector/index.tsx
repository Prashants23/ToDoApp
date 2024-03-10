import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import moment from "moment";
import { useStyles } from "react-native-unistyles";
import { styleSheet } from "./HorizontalDateSelector.style";

const HorizontalDateSelector = ({
  onDateSelected,
  initialDate = new Date(),
}) => {
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [dates, setDates] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(
    moment(selectedDate).month()
  );
  const { styles } = useStyles(styleSheet);
  const flatListRef = useRef(null);

  useEffect(() => {
    const initialDates = generateDates(selectedDate);

    setDates(initialDates);

    setTimeout(() => {
      const indexToScrollTo = initialDates.findIndex((date) =>
        moment(date).isSame(moment(), "day")
      );

      if (indexToScrollTo !== -1 && flatListRef.current) {
        flatListRef.current.scrollToIndex({
          animated: true,
          index: indexToScrollTo,
        });
      }
    }, 500);
  }, []);

  const handleDatePress = (date) => {
    setSelectedDate(date);
    onDateSelected(date);
  };

  const generateDates = (centerDate) => {
    const datesArray = [];
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

  const renderMonthButton = (direction) => {
    const isDisabled = direction === "prev" && currentMonth === 0;
    const isDisabledStyle = isDisabled ? { opacity: 0.5 } : {};

    return (
      <TouchableOpacity
        style={[styles.monthButton, isDisabledStyle]}
        onPress={() => {
          if (!isDisabled) {
            const newMonth =
              direction === "prev" ? currentMonth - 1 : currentMonth + 1;
            const newDate = moment(selectedDate)
              .month(newMonth)
              .startOf("month")
              .toDate();
            setSelectedDate(newDate);
            setDates(generateDates(newDate));
            setCurrentMonth(newMonth);
          }
        }}
      >
        <Text style={styles.monthButtonText}>
          {direction === "prev" ? "<" : ">"}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.dateItem,
        moment(selectedDate).isSame(item, "day") && styles.selected,
      ]}
      onPress={() => handleDatePress(item)}
    >
      <Text
        style={[
          styles.dateText,
          moment(selectedDate).isSame(item, "day") && styles.selectedDateText,
        ]}
      >
        {moment(item).format("ddd")}
      </Text>
      <Text
        style={[
          styles.dateText,
          moment(selectedDate).isSame(item, "day") && styles.selectedDateText,
        ]}
      >
        {moment(item).format("DD")}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.monthControl}>
        {renderMonthButton("prev")}
        <Text style={styles.currentMonth}>
          {moment(selectedDate).format("MMMM YYYY")}
        </Text>
        {renderMonthButton("next")}
      </View>
      <FlatList
        ref={flatListRef}
        data={dates}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default HorizontalDateSelector;
