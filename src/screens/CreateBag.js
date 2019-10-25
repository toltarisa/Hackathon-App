import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'water',
    title: 'Su',
    image: require('../assets/su.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'fener',
    title: 'fener',
    image: require('../assets/fener.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'ilkyardim',
    title: 'Ilk yardim Cantasi',
    image: require('../assets/ilkyardim.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 'ilaç',
    title: 'İlaçlar',
    image: require('../assets/ilaç.png'),
    backgroundColor: '#eb4034',
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
        <Text style={{flex: 1}}>{item.title}</Text>
        <Image
          style={{width: 250, height: 300, resizeMode: 'contain'}}
          source={item.image}
        />
        <Text style={{flex: 1}}>{item.text}</Text>
      </View>
    );
  };

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
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
});

export default CreateBag;
