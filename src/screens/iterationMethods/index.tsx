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

let i = 0;
const IterationMethodsScreen = () => {
  console.log('main component load lan thu: ', i);
  i++;

  const [currentMethod, setcurrentMedthod] = useState('');
  const [array, setArray] = useState<any[]>([]);
  const [result, setResult] = useState<any[]>([]);
  const [newName, setNewName] = useState('');
  const [idInput, setIdInput] = useState('');
  const methods = [
    {
      id: '1',
      name: 'map',
    },
    {id: '2', name: 'flatMap'},
    {id: '3', name: 'filter'},
    {id: '4', name: 'reduce'},
    {id: '5', name: 'reduceRight'},
    {id: '6', name: 'every'},
    {id: '7', name: 'some'},
    {id: '8', name: 'from'},
    {id: '9', name: 'keys'},
    {id: '10', name: 'entries'},
  ];

  const [listmethods, setMethods] =
    useState<{id: string; name: string}[]>(methods);

  const methodsState = methods.map(method => ({
    id: method.id,
    status: false,
  }));

  const [ismethodClicked, setMethodClicked] =
    useState<{id: string; status: boolean}[]>(methodsState);

  // const updateState = () => {
  //   const methodsStateUpdate = [ismethodClicked.shift()];
  //   setMethodClicked(methodsStateUpdate);
  // };

  // updateState();

  const handleArrInput = (value: string) => {
    const arrString = value.split(',').map(item => item.trim());
    const numericArray = arrString.flatMap(item =>
      item.split(' ').map(num => parseFloat(num.trim())),
    );
    setArray(numericArray.filter(num => !isNaN(num)));
  };

  //  console.log(ismethodClicked);

  const handleMethodSubmit = (id: string) => {
    setMethodClicked(prevState => {
      return prevState.map((item, index) => {
        if (index === parseInt(id) - 1) {
          return {
            ...item,
            status: !ismethodClicked[parseInt(item.id) - 1].status,
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
    setMethods(prevState => {
      return prevState.map((item, index) => {
        if (index === parseInt(id) - 1) {
          return {
            ...item,
            name: newName,
          };
        } else {
          console.log(item, '**************');
          return item;
        }
      });
    });
  };

  console.log(listmethods[0]);

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
          data={listmethods}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ButtonMethod
              method={item}
              onPress={handleMethodSubmit}
              buttonClicked={ismethodClicked[parseInt(item.id) - 1].status}
            />
          )}
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
