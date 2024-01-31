import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import ButtonMethod from '../../components/buttonMethod';

const IterationMethodsScreen = () => {
  const [currentMethod, setcurrentMedthod] = useState('');
  const [array, setArray] = useState<any[]>([]);
  const [result, setResult] = useState<any[]>([]);

  const methods = [
    {
      id: '1',
      name: 'map',
      deps: 'Thực hiện một hàm callback cho mỗi phần tử trong mảng.',
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
  const handleArrInput = (value: string) => {
    const arrString = value.split(',').map(item => item.trim());
    const numericArray = arrString.flatMap(item =>
      item.split(' ').map(num => parseFloat(num.trim())),
    );
    setArray(numericArray.filter(num => !isNaN(num)));
  };

  const handleMethodSubmit = () => {
    setResult(array.map(item => item * 2));
  };

  console.log(result);

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter array"
          onBlur={text => handleArrInput(text.nativeEvent.text)}
        />
        <TextInput style={styles.input} placeholder="Enter array" />
      </View>
      <View style={styles.result}>
        <Text>{result}</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={methods}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ButtonMethod method={item} onPress={handleMethodSubmit} />
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
