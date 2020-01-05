import React, {Component} from 'react';
import {StyleSheet, View, Text, ToastAndroid, BackHandler} from 'react-native';
import Maps from '../components/Maps';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

class Checkpoint extends Component {
  constructor() {
    super();

    this.state = {
      mapOpen: false,
    };
  }

  openMap = () => {
    this.setState({mapOpen: !this.state.mapOpen});
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {return true;});
}


  render() {
    return (
      <View style={styles.main}>
        {this.state.mapOpen ? (
          <Maps openMap={this.openMap} />
        ) : (
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.openDrawer();
              }}
              style={styles.menu}>
              <Icon name="ios-menu" size={40} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                alert('Bluetooth Aktif Edildi.Çevredeki bağlantılar aranıyor')
              }
              style={styles.blButton}>
              <Icon
                style={{marginLeft: 70, marginTop: 5}}
                name="ios-bluetooth"
                size={35}
              />
            </TouchableOpacity>
            <View style={styles.buttonBox}>
              <TouchableHighlight
                style={styles.myButton}
                onPress={this.openMap}>
                <Text style={styles.buttonText}>
                  En Yakın Toplanma Alanını Bul !
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myButton: {
    padding: 5,
    height: 200,
    width: 200, //The Width must be the same as the height
    borderRadius: 400, //Then Make the Border Radius twice the size of width or Height
    backgroundColor: 'red',
  },
  buttonText: {
    flex: 1,
    width: 190,
    textAlign: 'center',
    marginTop: 40,
    fontSize: 28,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  menu: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  blButton: {
    display: 'flex',
    width: 160,
    height: 50,
    borderRadius: 65,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginVertical: 50,
    borderWidth: 1,
  },
});

export default Checkpoint;
