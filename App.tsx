import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Pessoas from './src/Pessoas';

class App extends Component {
  state = {
    pessoas: [
      { id: 1, nome: 'Wilson', idade: 53, email: 'wilssp@gmai.com.com' },
      { id: 2, nome: 'Andrea', idade: 52, email: 'andrea@andrea.com' },
      { id: 3, nome: 'Thiago', idade: 32, email: 'thiago@thiago.com' },
      { id: 4, nome: 'Thais', idade: 26, email: 'thais@thais.com' },
      { id: 5, nome: 'Wesley', idade: 24, email: 'wesley@wesley.com' },
      { id: 6, nome: 'Everton', idade: 17, email: 'everton@everton.com' },
      { id: 7, nome: 'Jeferson', idade: 17, email: 'jeferson@everton.com' },
      { id: 8, nome: 'Maria Alice', idade: 17, email: 'malice@alice.com' },
      
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.pessoas}
          keyExtractor={(item) => item.id.toString()} 
          renderItem={({ item }) => <Pessoas pessoa={item} />} 
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;