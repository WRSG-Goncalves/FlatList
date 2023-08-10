import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';

interface FeedItem {
  id: number;
  nome: string;
  idade: number;
  email: string;
}

interface AppState {
  feed: FeedItem[];
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      feed: [
        { id: 1,nome: 'Wilson Gonçalves', idade: 53, email: 'wilssp@gmail.com' },
        { id: 2,nome: 'Thiago Gonçalves', idade: 32, email: 'thiago@gmail.com' },
        { id: 3,nome: 'Thais Gonçalves', idade: 26, email: 'thais@gmail.com' },
        { id: 4,nome: 'Wesley Gonçalves', idade: 24, email: 'wesley@gmail.com' },
        { id: 5,nome: 'Everton Gonçalves', idade: 17, email: 'everton@gmail.com' },
      ],
    };
  }

  renderItem = ({ item }: { item: FeedItem }) => {
    return <Pessoa data={item} />;
  };

  render() {
    return (
      <View style={styles.sectionContainer}>
        <FlatList
          data={this.state.feed}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

class Pessoa extends Component<{ data: FeedItem }> {
  render() {
    return (
      <View style={styles.pessoaArea}>
        <Text style={styles.pessoaText}>Nome:{this.props.data.nome}</Text>
        <Text style={styles.pessoaText}>Idade{this.props.data.idade}</Text>
        <Text style={styles.pessoaText}>E-mail{this.props.data.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  pessoaText:
  {
    color: '#FFF',
    fontSize: 20
  },
  
  pessoaArea:
  {
    backgroundColor:'#222',
    height: 200,
    marginBottom: 15
  }
});

export default App;

