// ... (các import và state khác)
import React, {useEffect, useState, useCallback} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ButtonMethod from '../../components/buttonMethod';
import randomObjectsArray from '../../assets/data';

let i = 0;

const IterationMethodsScreen = () => {
  console.log('main component load lan thu: ', i);
  i++;

  const DataState = randomObjectsArray.map(item => ({
    id: item.id,
    status: false,
  }));

  const [newName, setNewName] = useState('');
  const [idInput, setIdInput] = useState('');
  const [listData, setData] =
    useState<{id: string; name: string}[]>(randomObjectsArray);
  const [ItemClicked, setItemClicked] = useState<
    {
      id: string;
      status: boolean;
    }[]
  >(DataState);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [nameError, setNameError] = useState<boolean>(false);

  const handleMethodSubmit = useCallback((id: string) => {
    setItemClicked(prevItemClicked =>
      prevItemClicked.map(item => ({
        ...item,
        status: item.id === id ? !item.status : false,
      })),
    );
    setSelectedItemId(id);
  }, []);

  const onChangeName = useCallback((value: string) => {
    setNewName(value);
  }, []);

  const onChangeIdInput = useCallback((value: string) => {
    setIdInput(value);
  }, []);

  const handleChangeMethodName = useCallback(
    (id: string) => {
      setData(prevState =>
        prevState.map(item =>
          item.id === id ? {...item, name: newName} : item,
        ),
      );
    },
    [newName],
  );

  const handleButtonClicked = useCallback(
    (id: string) => {
      return ItemClicked.find(item => item.id === id)?.status || false;
    },
    [ItemClicked],
  );

  useEffect(() => {
    const isValidName = /^[a-zA-Z\s]*$/.test(newName);
    setNameError(!isValidName || newName.trim() === '');
  }, [newName]);

  const renderItem = useCallback(
    ({item}) => (
      <ButtonMethod
        method={item}
        onPress={() => handleMethodSubmit(item.id)}
        buttonClicked={handleButtonClicked(item.id)}
      />
    ),
    [handleMethodSubmit, handleButtonClicked],
  );

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="Enter id"
          onChangeText={text => onChangeIdInput(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter name"
          onChangeText={text => onChangeName(text)}
        />
      </View>
      <View style={styles.result}>
        {nameError && newName != '' && (
          <Text>Name should not contain numbers or special characters.</Text>
        )}
      </View>
      <TouchableOpacity
        onPress={() => handleChangeMethodName(idInput)}
        style={{
          alignItems: 'center',
          padding: 20,
          backgroundColor: nameError ? 'gray' : 'green',
          margin: 20,
          borderRadius: 10,
        }}
        disabled={nameError}>
        <Text>Submit change</Text>
      </TouchableOpacity>
      <View style={styles.list}>
        <FlatList
          data={listData}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default IterationMethodsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {},
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
