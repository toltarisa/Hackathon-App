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
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Checkpoint')}
            style={styles.clickable}>
            <View style={styles.menuItem}>
              <Icon name="ios-navigate" size={40} color="#1056ea" />
              <Text style={styles.menuItemText}>Lokasyon Bul</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CreateBag')}
            style={styles.clickable}>
            <View style={styles.menuItem}>
              <Icon name="ios-medkit" size={40} color="#1056ea" />
              <Text style={styles.menuItemText}>Çanta Oluştur</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('FamilyStatus')}
            style={styles.clickable}>
            <View style={styles.menuItem}>
              <Icon name="ios-people" size={40} color="#1056ea" />
              <Text style={styles.menuItemText}>Ailemin Durumu</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}></View>
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
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  clickable: {
    marginHorizontal: 15,
  },
  bottom: {
    flex: 4,
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuItemText: {
    marginHorizontal: 10,
  },
});
