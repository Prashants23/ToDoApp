import { View, Text } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "~/components/Header";
import { useStyles } from "react-native-unistyles";
import { styleSheet } from "./HomeScreen.style";
import { useAuthStorage } from "~/storage/useStorageHooks";
import { DateTimer, HorizontalDateSelector } from "~/components";

const HomeScreen = () => {
  const { top: safeAreaTop } = useSafeAreaInsets();

  const [authDetails] = useAuthStorage();

  const { tokens: { name } } = authDetails || {}

  const {
    styles,
  } = useStyles(styleSheet);
  return (
    <View style={styles.container(safeAreaTop)} >
      <Header  screenName="Homepage" leftButton={false} transparent overrideStyles={{title: styles.headerTitle}}/>
      <View style={styles.subContainer}>
        <Text style={styles.welcomeTextStyle} >Hi, {name} 👋🏻</Text>
        <View style={styles.dateContainer}>
        <DateTimer />
        </View>
        <HorizontalDateSelector initialDate={new Date()} onDateSelected={()=>{console.log('I was clicked')}}/>
      </View>
     
    </View>
  );
};

export default HomeScreen;
