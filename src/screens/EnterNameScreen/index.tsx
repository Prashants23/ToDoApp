
import React, { useState } from 'react';
import { Text, TextInput, SafeAreaView } from 'react-native';
import { Image } from "expo-image";
import { useStyles } from "react-native-unistyles";
import { Button } from '~/components';
import styleSheet from './EnterNameScreen.style';
import { useAuthStorage } from '~/storage/useStorageHooks';

const CLOCK_ICON = require("assets/images/clock.svg");

const EnterNameScreen = () => {
  const [name, setName] = useState('');

const {styles} = useStyles(styleSheet)
const [, setAuthDetails] = useAuthStorage();

  const handleChange = (text) => {
    setName(text);
  };


  const onContinue=()=>{
    setAuthDetails({
      isAuthenticated: true,
      tokens: {
        name:name
      },
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={CLOCK_ICON} style={styles.imageContainer} />
      <Text style={styles.title}>Welcome to Task Tracker</Text>
      <Text style={styles.subtitle}>Let’s help you manage your tasks.</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Name"
        value={name}
        onChangeText={handleChange}
      />
      <Button disabled={!name} title="Continue" onPress={onContinue} style={styles.btnStyle} />
    </SafeAreaView>
  );
};


export default EnterNameScreen;
