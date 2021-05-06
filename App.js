import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  TextInput,
  FlatList
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import BookCount from './components/BookCount';

export default class App extends Component {
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
   }), () => {
     console.log(this.state.books)
   });
  }

  markAsRead = (selectedBook, index) => {
    let newList = this.state.books.filter((book) => book !== selectedBook);

    this.setState(prevState => ({
      books: newList,
      readingCount: prevState.readingCount - 1,
      readCount: prevState.readCount + 1
    }));
  }

  renderItem = (item, index) => (
    <View style={{height: 50, flexDirection: 'row'}}>
      <View style={{flex:1, justifyContent: 'center, ', padding: 10}}>
          <Text>{item}</Text>
      </View>
        <TouchableOpacity onPress={() => this.markAsRead(item, index)}>
            <View style={{
              width: 100, 
              height: 50,
              backgroundColor: '#a5deba',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Text style={{fontWeight: 'bold', color: 'white'}}>Mark As Read</Text>
            </View>
          </TouchableOpacity>
    </View>
  )


  render() {
    return (
   <View style={{flex: 1}}>
      <SafeAreaView />
      <View style={{
        height: 70, 
        borderBottomWidth: 0.5, 
        borderBottomColor: '#E9E9E9', 
        alignItems: 'center',
        justifyContent: 'center'
      }}>
         <Text style={{fontSize: 24}}>Book Worm</Text>
      </View>

      <View style={{flex: 1}}>
         {this.state.isAddNewBookVisible && (
        <View style={{height: 50, flexDirection: 'row'}}>
          <TextInput 
            style={{flex: 1, backgroundColor: '#ececec', paddingLeft: 10}}
            onChangeText={(text)=> this.setState({textInputData: text})}
            placeholder='Enter Book Name'
            placeholderTextColor='grey'
          />

          <TouchableOpacity onPress={() => this.addBook(this.state.textInputData)}>
            <View style={{
              width: 50, 
              height: 50,
              backgroundColor: '#a5deba',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Ionicons name='ios-checkmark' color='white' size={40} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.hideAddNewBook}>
            <View style={{
              width: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#deada5'
            }}>
              <Ionicons name='ios-close' color='white' size={40} />
            </View>
          </TouchableOpacity>
        </View>
        )}

       <FlatList 
          data={this.state.books}
          renderItem={({ item }, index) => this.renderItem(item, index)}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={
            <View style={{marginTop: 50, alignItems: 'center',}}>
              <Text style={{fontWeight: 'bold'}}>Not Reading Any Books Now</Text>
            </View>
          }
       />


        <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 20,
              right: 20
            }}
            onPress={this.showAddNewBook}
        >
          <View style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#AAD1E6',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text style={{color: 'white',fontSize: 30}}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{   
        height: 70, 
        borderTopWidth: 0.5, 
        borderTopColor: '#E9E9E9',
        flexDirection: 'row',
      }}>
       <BookCount title='Total' count={this.state.totalCount} />
       <BookCount title='Reading' count={this.state.readingCount}/>
       <BookCount title='Read' count={this.state.readCount} />
      </View>
      <SafeAreaView />
    </View>
  );
}

}
