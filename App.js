import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [submit, setSubmit] = useState(false);

  const handlePress = () => {
    setSubmit(!submit);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Write Your Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={value => {
          setName(value);
        }}
        // multiline
        // keyboardType="numeric"
        // editable={false}
        // secureTextEntry
      />
      {submit && (
        <Text style={styles.text}>Your are registered as: {name}</Text>
      )}
      {/* <Button
        title={submit ? 'clear' : 'Submit'}
        onPress={handlePress}
        // disabled={submit}
      /> */}
      <
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});

export default App;
