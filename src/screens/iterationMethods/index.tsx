import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ButtonMethod from '../../components/buttonMethod';
import randomObjectsArray from '../../assets/data';

let i = 0;
const IterationMethodsScreen = () => {
  console.log('main component load lan thu: ', i);
  i++;

  const [array, setArray] = useState<any[]>([]);
  const [result, setResult] = useState<any[]>([]);
  const [newName, setNewName] = useState('');
  const [idInput, setIdInput] = useState('');

  const [listData, setData] =
    useState<{id: string; name: string}[]>(randomObjectsArray);

  const DataState = randomObjectsArray.map(item => ({
    id: item.id,
    status: false,
  }));

  const [ItemClicked, setItemClicked] =
    useState<{id: string; status: boolean}[]>(DataState);

  const handleArrInput = (value: string) => {
    const arrString = value.split(',').map(item => item.trim());
    const numericArray = arrString.flatMap(item =>
      item.split(' ').map(num => parseFloat(num.trim())),
    );
    setArray(numericArray.filter(num => !isNaN(num)));
  };

  const handleMethodSubmit = (id: string) => {
    setItemClicked(prevState => {
      return prevState.map(item => {
        if (item.id === id) {
          return {
            ...item,
            status: !item.status,
          };
        } else {
          return item;
        }
      });
    });
  };

  const onChangeName = (value: string) => {
    setNewName(value);
  };

  const onChangeIdInput = (value: string) => {
    setIdInput(value);
  };

  const handleChangeMethodName = (id: string) => {
    setData(prevState => {
      return prevState.map(item => {
        if (item.id === id) {
          return {
            ...item,
            name: newName,
          };
        } else {
          return item;
        }
      });
    });
  };

  const handleButtonClicked = (id: string) => {
    let result = false;
    ItemClicked.map(item => {
      if (item.id === id) {
        result = item.status;
      }
    });
    return result;
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="Enter id"
          onBlur={text => handleArrInput(text.nativeEvent.text)}
          onChangeText={text => onChangeIdInput(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter name"
          onChangeText={text => onChangeName(text)}
        />
      </View>
      <View style={styles.result}>
        <Text>{result}</Text>
      </View>
      <TouchableOpacity
        onPress={() => handleChangeMethodName(idInput)}
        style={{
          alignItems: 'center',
          padding: 20,
          backgroundColor: 'grey',
          margin: 20,
          borderRadius: 10,
        }}>
        <Text>Submit change</Text>
      </TouchableOpacity>
      <View style={styles.list}>
        <FlatList
          data={listData}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ButtonMethod
              method={item}
              onPress={handleMethodSubmit}
              buttonClicked={handleButtonClicked(item.id)}
            />
          )}
        />
      </View>
    </View>
  );
};

// đổi sang dùng id
// tăng lên tầm 100 item
// chọn item khác item cũ trở lại mặc định
// insert dữ liệu (submit thêm 1 item)
// click sửa item
// validation không là chữ số không có ký tự đặc biệt/ enable submit
// khi không có error
// option của onpress on long press
// kết hợp hook để tránh reload các buttton không cần thiết

export default IterationMethodsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingBottom: 100,
  },
  input: {
    margin: 20,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  result: {
    margin: 20,
  },
});
