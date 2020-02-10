import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import { uuid } from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'Eggs' },
    { id: uuid(), text: 'Bread' },
    { id: uuid(), text: 'Juice' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id))
  };

  const createAlert = (title, message, buttonText) => {
    Alert.alert(
      title,
      message,
      [
        {
          text: buttonText
        }
      ]);
  }

  const addItem = text => {
    if (!text) {
      createAlert('Error', 'Please enter an item', 'Ok')
    } else {
      setItems(prevItems => [{ id: uuid(), text }, ...prevItems]);
    }
  };


  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({ item }) => (
        <ListItem item={item} deleteItem={deleteItem} />
      )} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
