import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {PessoaProps} from './interface/pessoas';

class Pessoas extends Component<PessoaProps> {
  render() {
    return (
      <View style={styles.areaPessoa}>
        <Text>Olaaaaaaaa</Text>
        <Text style={styles.textoPessoa}>Nome: {this.props.pessoa.nome}</Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.pessoa.idade}</Text>
        <Text style={styles.textoPessoa}>Email: {this.props.pessoa.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor: '#222',
    height: 150,
    marginBottom: 25,
    padding: 15,
  },
  textoPessoa: {
    color: '#FFF',
  },
});

export default Pessoas;
