import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Checkpoint extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <View style={styles.main}>
        <Text>Checkpoint Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Checkpoint;
