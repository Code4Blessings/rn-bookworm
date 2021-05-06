import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import BookCount from './components/BookCount';

export default function App() {
  const [totalCount, setTotalCount] = useState(0);
  const [readingCount, setReadingCount] = useState(0);
  const [readCount, setReadCount] = useState(0);
  const [isAddNewBookVisible, setIsAddNewBookVisible] = useState(false);
  const [textInputData, setTextInputData] = useState('');
  const [books, setBooks] = useState([]);

  const showAddNewBook = () => {
    setIsAddNewBookVisible(true);
  }

  const hideAddNewBook = () => {
    setIsAddNewBookVisible(false);
  }

  const inputData = (text) => {
    setTextInputData(text)
  }

  const addBook = (book) => {
    setBooks([...books, book])
    console.log(books)
  }


  return (
    <View style={styles.container} >
      <SafeAreaView />
      <View style={styles.borderBottom}>
         <Text style={styles.headerText}>Book Worm</Text>
      </View>
      <View style={styles.header}>
         {isAddNewBookVisible && (
        <View style={styles.textInput}>
          <TextInput 
            style={styles.textInputField}
            onChangedText={inputData}
            placeholder='Enter Book Name'
            placeholderTextColor='grey'
          />

          <TouchableOpacity onPress={() => addBook(textInputData)}>
            <View style={styles.checkBox}>
              <Ionicons name='ios-checkmark' color='white' size={40} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={hideAddNewBook}>
            <View style={[styles.checkBox, {backgroundColor: '#deada5'}]}>
              <Ionicons name='ios-close' color='white' size={40} />
            </View>
          </TouchableOpacity>
        </View>
        )}
        <TouchableOpacity
            style={styles.buttonPosition}
            onPress={showAddNewBook}
        >
          <View style={styles.bookImage}>
            <Text style={styles.bookImageText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.borderTop}>
       <BookCount title='Total' count={totalCount} />
       <BookCount title='Reading' count={readingCount}/>
       <BookCount title='Read' count={readCount} />
      </View>
      <SafeAreaView />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
 },
 box: {
   height: 50,
   width: 50,
   backgroundColor: 'red'
 },
 borderBottom: {
   height: 70, 
   borderBottomWidth: 0.5, 
   borderBottomColor: '#E9E9E9', 
   alignItems: 'center',
   justifyContent: 'center'
 },
 header: {
   flex: 1,
   
 }, 
 headerText: {
   fontSize: 24
 },
 textInput: {
   height: 50,
   flexDirection: 'row'
 },
 textInputField: {
   flex: 1,
   backgroundColor: '#ececec',
   paddingLeft: 10
 },
 checkBox: {
   width: 50,
   height: 50,
   backgroundColor: '#a5deba',
   alignItems: 'center',
   justifyContent: 'center'
 },
 bookImage: {
   width: 50,
   height: 50,
   borderRadius: 25,
   backgroundColor: '#AAD1E6',
   alignItems: 'center',
   justifyContent: 'center'
 },
 bookImageText: {
   color: 'white',
   fontSize: 30
 },
 borderTop: {
   height: 70, 
   borderTopWidth: 0.5, 
   borderTopColor: '#E9E9E9',
   flexDirection: 'row',
 },
 footer: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center'
 },
 footerText: {
   fontSize: 20
 },
 buttonPosition: {
   position: 'absolute',
   bottom: 20,
   right: 20
 }
});
