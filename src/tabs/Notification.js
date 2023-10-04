import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import {successToast} from '../common/Toast_Notification';

const Notification = () => {
  const handlePress = () => {
    successToast();
  };
  return (
    <View>
      <Text onPress={() => handlePress()}>Notification</Text>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
