import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class DrawerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.menuItem}>
            <TouchableOpacity>
              <Icon name="navigate" size={30} color="#900" />
              <Text>Lokasyon Bul</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.menuItem}>
              <Text>Çanta Oluştur</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text>Aile Durumu</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text>Sidebar Bottom</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 3,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
  },
  bottom: {
    flex: 4,
  },
  menuItem: {},
});
