import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput,
  FlatList
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import BookCount from '../components/BookCount';
import CustomActionButton from '../components/CustomActionButton';
import colors from '../assets/colors';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCount: 0,
      readingCount: 0,
      readCount: 0,
      isAddNewBookVisible: false,
      textInputData: '',
      books: []
    };
  }

  showAddNewBook = () => {
    this.setState({isAddNewBookVisible: true});
  }

  hideAddNewBook = () => {
   this.setState({isAddNewBookVisible: false});
  }

  addBook = book => {
   this.setState((state, props) => ({
     books: [...state.books, book],
     totalCount: state.totalCount + 1,
     readingCount: state.readCount + 1,
     isAddNewBookVisible: false
   }), () => {
     console.log(this.state.books)
   });
  }

  markAsRead = (selectedBook, index) => {
    let newList = this.state.books.filter(book => book !== selectedBook);

    this.setState(prevState => ({
      books: newList,
      readingCount: prevState.readingCount - 1,
      readCount: prevState.readCount + 1
    }));
  }

  renderItem = (item, index) => (
    <View style={styles.listItemContainer}>
      <View style={styles.listItems}>
          <Text>{item}</Text>
      </View>
      <CustomActionButton 
        style={styles.markAsReadButton}
        onPress={() => this.markAsRead(item, index)}>
        <Text style={styles.listItemText}>Mark As Read</Text>
      </CustomActionButton>
    </View>
  )


  render() {
    return (
   <View style={{flex: 1}}>
      <SafeAreaView />
      <View style={styles.topContainer}>
         <Text style={styles.headerText}>Book Worm</Text>
      </View>

      <View style={styles.header}>
         {this.state.isAddNewBookVisible && (
        <View style={styles.textInput}>
          <TextInput 
            style={styles.textInputField}
            onChangeText={(text)=> this.setState({textInputData: text})}
            placeholder='Enter Book Name'
            placeholderTextColor='grey'
          />
          <CustomActionButton 
              style={styles.checkButton}
              onPress={() => this.addBook(this.state.textInputData)}>
             <Ionicons name='ios-checkmark' color='white' size={40} />
          </CustomActionButton>

           <CustomActionButton onPress={this.hideAddNewBook}>
             <Ionicons name='ios-close' color='white' size={40} />
          </CustomActionButton>
          
        </View>
        )}

       <FlatList 
          data={this.state.books}
          renderItem={({ item }, index) => this.renderItem(item, index)}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={
            <View style={{marginTop: 50, alignItems: 'center'}}>
              <Text style={styles.listIsEmptyText}>Not Reading Any Books Now</Text>
            </View>
          }
       />

        <CustomActionButton 
          position='right' style={styles.addButton} 
          onPress={this.showAddNewBook}>
          <Text style={styles.addButtonText}>+</Text>
        </CustomActionButton>
        
      </View>
      <View style={styles.footer}>
       <BookCount title='Total' count={this.state.totalCount} />
       <BookCount title='Reading' count={this.state.readingCount}/>
       <BookCount title='Read' count={this.state.readCount} />
      </View>
      <SafeAreaView />
    </View>
  );
}
}

const styles = StyleSheet.create({
 topContainer: {
    height: 70, 
    borderBottomWidth: 0.5, 
    borderBottomColor: colors.borderColor, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {flex: 1},
  headerText: {fontSize: 24},
  textInput: {height: 50, flexDirection: 'row'},
  textInputField: {flex: 1, backgroundColor: colors.bgTextInput, paddingLeft: 10},
  checkButton: {backgroundColor: colors.bgSuccess},
  addButton: {backgroundColor: colors.bgPrimary, borderRadius: 25},
  addButtonText: {color: 'white', fontSize: 30},
  listItemContainer: {height: 50, flexDirection: 'row'},
  listItems: {flex:1, justifyContent: 'center', padding: 10},
  markAsReadButton: {width: 100, backgroundColor: colors.bgSuccess},
  listItemText: {fontWeight: 'bold', color: 'white'},
  listIsEmptyText: {fontWeight: 'bold'},
  footer: {
    height: 70, 
    borderTopWidth: 0.5, 
    borderTopColor: colors.borderColor, 
    flexDirection: 'row'
  }
});
