import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';

const slides = [
  {
    key: 'water',
    title: 'Su',
    image: require('../assets/su.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'fener',
    title: 'Fener',
    image: require('../assets/fener.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'ilkyardim',
    title: 'İlk Yardım Çantası',
    image: require('../assets/ilkyardim.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 'ilac',
    title: 'İlaçlar',
    image: require('../assets/ilaç.png'),
    backgroundColor: '#eb4034',
  },
  {
    key: 'elbise',
    title: 'Elbise',
    image: require('../assets/clothe.png'),
    backgroundColor: '#3498db',
  },
  {
    key: 'pil',
    title: 'Pil',
    image: require('../assets/battery.png'),
    backgroundColor: '#e67e22',
  },
  {
    key: 'cakı',
    title: 'Çakı',
    image: require('../assets/pocketknife.png'),
    backgroundColor: '#8e44ad',
  },
  {
    key: 'duduk',
    title: 'Düdük',
    image: require('../assets/whistle.png'),
    backgroundColor: '#1abc9c',
  },
  {
    key: 'lighter',
    title: 'Çakmak',
    image: require('../assets/lighter.png'),
    backgroundColor: '#34495e',
  },
];
class CreateBag extends Component {
  constructor() {
    super();

    this.state = {
      showRealApp: false,
    };
  }

  _renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: item.backgroundColor,
        }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
          style={styles.menu}>
          <Icon name="ios-menu" size={40} />
        </TouchableOpacity>
        <Text style={{fontSize: 25, color: '#fff'}}>{item.title}</Text>
        <Image
          style={{width: 250, height: 300, resizeMode: 'contain'}}
          source={item.image}
        />
        <Text style={{fontSize: 20, color: '#fff', maxWidth: 300}}>
          Deprem çantanda {item.title.toLowerCase()} var mı ?
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginBottom: 40,
          }}>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.btntext}>Var</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AdsPage', slides)}
            style={styles.buttons}>
            <Text style={styles.btntext}>Yok</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  _onDone = () => {
    this.setState({showRealApp: true});
  };

  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          slides={slides}
          onDone={this._onDone}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
    width: 120,
    height: 40,
    paddingTop: 10,
    paddingLeft: 45,
    borderRadius: 40,
  },
  btntext: {
    fontSize: 15,
  },
  menu: {
    position: 'absolute',
    left: 0,
    top: 0,
    marginHorizontal: 10,
    marginVertical: 15,
  },
});

export default CreateBag;
