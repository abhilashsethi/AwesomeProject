/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Linking,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  // const [name, setName] = useState('Abhi');
  // const [sessionName, setSessionName] = useState({number: 6, title: 'state'});
  // const [current, setCurrent] = useState(true);
  const [items, setItems] = useState([
    {name: 'item1'},
    {name: 'item2'},
    {name: 'item3'},
    {name: 'item4'},
    {name: 'item5'},
    {name: 'item6'},
    {name: 'item7'},
    {name: 'item8'},
  ]);

  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1'],
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2'],
    },
  ];

  const [refreshing, setRefreshing] = useState(false);
  const handleClick = () => {
    setName('Abhilash');
    setSessionName({number: 7, title: 'style'});
    setCurrent(false);
  };
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...items, {name: 'item9'}]);
    setRefreshing(false);
  };

  return (
    // <View style={styles.body}>
    //   <Text style={styles.text}>
    //     Learning React Native With {name ? 'Abhi' : null}
    //   </Text>
    //    <Text style={styles.text}>Learning React Native With {name}</Text>
    //    <Button title="Toggle Name" onPress={() => setName(!name)}></Button>
    //    <Button title="Update State" onPress={handleClick} />
    //  </View>
    // <View style={styles.body}>
    //   <View style={styles.view1}>
    //     <Text style={styles.text}>1</Text>
    //   </View>
    //   <View style={styles.view2}>
    //     <Text style={styles.text}>2</Text>
    //   </View>
    //   <View style={styles.view3}>
    //     <Text style={styles.text}>3</Text>
    //   </View>
    // </View>

    // <ScrollView
    //   style={styles.body}
    //   refreshControl={
    //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    //   }>
    //   {items.map(object => {
    //     return (
    //       <View style={styles.item} key={object.key}>
    //         <Text style={styles.text}>{object.item}</Text>
    //       </View>
    //     );
    //   })}
    // </ScrollView>
    // <FlatList
    //   keyExtractor={(item, index) => index.toString()}
    //   data={items}
    //   renderItem={({item}) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    //   }
    // />
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={DATA}
      renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
      renderSectionHeader={({section}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    backgroundColor: '#00ffff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  view1: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 1,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 1,
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 44,
    fontStyle: 'italic',
    margin: 10,
  },
  button: {
    widths: 150,
    height: 60,
  },
});

export default App;
