import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';

// coi lại lỗi, lý do re-render
interface ButtonAny {
  index: Int16Array;
  id: string;
  name: string;
}

interface ButtonAnyProps {
  data: ButtonAny;
  onPress?: (id: string) => void;
  buttonClicked?: boolean;
}

const ButtonMethod = ({data, onPress, buttonClicked}: ButtonAnyProps) => {
  console.log(data.index);

  const handlePress = () => {
    if (onPress) {
      onPress(data.id);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, buttonClicked && styles.buttonClicked]}
        onPress={handlePress}>
        <Text>{data.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(ButtonMethod);

const styles = StyleSheet.create({
  container: {
    margin: 5,
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    padding: 20,
    backgroundColor: 'lightblue',
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonClicked: {
    backgroundColor: 'blue',
  },
});
