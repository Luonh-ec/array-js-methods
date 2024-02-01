import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
interface Method {
  id: string;
  name: string;
}

interface ButtonMethodProps {
  method: Method;
  onPress?: () => void; // Hàm sự kiện onPress có thể được truyền vào hoặc không
}

const ButtonMethod: React.FC<ButtonMethodProps> = ({method, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
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
    backgroundColor: 'green',
    borderRadius: 16,
    alignItems: 'center',
  },
});
