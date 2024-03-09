import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useStyles } from "react-native-unistyles";
import { Image } from "expo-image";
import React from "react";
import styleSheet from "./LaunchScreen.style";
import { navigationRef } from "~/utils/navigator.utils";
import { Button } from "~/components";
const LAUNCH_ICON = require("assets/images/launchScreemIcon.svg");
const LaunchScreen = () => {

  const { styles } = useStyles(styleSheet)

  const onGetStarted = () => {
    navigationRef.current.navigate('EnterNameScreen');
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Image source={LAUNCH_ICON} style={styles.imageContainer} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Task Tracker</Text>
        <Text style={styles.subTitle}>Stay organized, achieve more</Text>
      </View>
      <Button title="Get Started" onPress={onGetStarted} style={styles.btnStyle} />
    </SafeAreaView>
  );
};

export default LaunchScreen;
