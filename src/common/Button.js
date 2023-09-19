import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Button = ({
  title,
  onPress,
  color,
  icon_name,
  icon_font_size,
  color_icon,
  btnwidth,
  height,
  marginBottom,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: color, width: btnwidth, height: height, marginBottom},
      ]}
      onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text style={styles.buttonText}>{title}</Text>

        <Icon
          name={icon_name}
          style={{fontSize: icon_font_size, color: color_icon}}
        />
      </View>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  title: 'Default Button',
  color: '#3498db',
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    // width: '98%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    marginTop: 5,
  },
});

export default Button;
