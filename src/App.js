import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Main" component={Main} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View>
        <Text style={styles.text}>GameOn</Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#ad40af',
          padding: 20,
          width: '90%',
          borderRadius: 5,
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}>
          Let's Begin
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Home = () => {
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    }}>
    <Text>Home Screen</Text>
  </View>;
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#20315f',
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});

export default App;
