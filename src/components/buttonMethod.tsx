import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
interface Method {
  id: string;
  name: string;
}

interface ButtonMethodProps {
  method: Method;
  onPress?: (id: string) => void;
  buttonClicked?: boolean;
}

let i = 0;

const ButtonMethod = ({method, onPress, buttonClicked}: ButtonMethodProps) => {
  const b = () => {
    if (onPress) {
      onPress(method.id);
    }
  };

  // console.log('component button load: ', i);
  // console.log(buttonClicked);

  // i++;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, buttonClicked && styles.buttonClicked]}
        onPress={b}>
        <Text>{method.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonMethod;

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
