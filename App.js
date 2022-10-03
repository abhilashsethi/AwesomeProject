import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [submit, setSubmit] = useState(false);

  const handlePress = () => {
    if (name.length > 3) {
      setSubmit(!submit);
    } else {
      // Alert.alert('Warning', 'The name must longer than 3', [
      //   {text: 'OK', onPress: () => console.warn('ok')},
      // ]);
      ToastAndroid.show('The name must longer than 3', ToastAndroid.LONG);
    }
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
      {submit ? (
        <Text style={styles.text}>Your are registered as: {name}</Text>
      ) : null}
      {/* <Button
        title={submit ? 'clear' : 'Submit'}
        onPress={handlePress}
        // disabled={submit}
      /> */}
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>{submit ? 'clear' : 'Submit'}</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#00ff00',
    width: 200,
    height: 50,
    alignItems: 'center',
  },
});

export default App;
