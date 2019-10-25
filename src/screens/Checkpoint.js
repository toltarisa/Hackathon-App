import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Maps from '../components/Maps'
import { TouchableHighlight } from 'react-native-gesture-handler';

class Checkpoint extends Component {
  constructor() {
    super();

    this.state = {
      mapOpen:false
    };
  }

  openMap = () => {
    this.setState({mapOpen:!this.state.mapOpen})
  }

  render() {
    return (
      <View style={styles.main}>
      {this.state.mapOpen ? <Maps openMap={this.openMap}/> : 
        <View style={styles.buttonBox}>
          <TouchableHighlight style={styles.myButton} onPress={this.openMap}>
              <Text style={styles.buttonText}>En Yakın Toplanma Alanını Bul</Text>
            </TouchableHighlight>
        </View>
        }
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  buttonBox:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myButton:{
    padding: 5,
    height: 200,
    width: 200,  //The Width must be the same as the height
    borderRadius:400, //Then Make the Border Radius twice the size of width or Height   
    backgroundColor:'red',


  },
  buttonText:{
    flex:1,
    width:190,
    textAlign:"center",
    marginTop:40,
    fontSize:28,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  }
});

export default Checkpoint;
