import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { TouchableHighlight } from 'react-native-gesture-handler';

const GOOGLE_MAPS_APIKEY = 'AIzaSyB_fGRLLKGG85LihKsTZOtw59H6y5Ku1A0';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 38.491934;
const LONGITUDE = 27.705766;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


class Maps extends Component {
  constructor() {
    super();

    this.state = {
      coordinates: [
        {
          latitude: 38.491934,
          longitude: 27.705766,
        },
        {
          latitude: 38.492060,
          longitude: 27.703438,
        },
      ],
    };
    this.mapView = null;
  }

  render() {
    return (
      <View style={styles.main}>
        <MapView
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          style={styles.map}
        >

          <MapView.Marker key={`coordinate_1`} coordinate={this.state.coordinates[1]} />
          <MapView.Marker key={`coordinate_0`} coordinate={this.state.coordinates[0]} />
          <MapViewDirections
              origin={this.state.coordinates[1]}
              destination={this.state.coordinates[0]}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={5}
              strokeColor="hotpink"
            />
        </MapView>
        <View style={styles.buttonBox}>
          <TouchableHighlight style={styles.myButton} onPress={this.props.openMap}>
              <Text style={styles.buttonText}>Geri Dön</Text>
          </TouchableHighlight>
        </View>
        
       </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
   
    width: '100%',
  },
  map:{
    width: '100%',
    height: '90%',
    top:0
  },
  myButton:{
    backgroundColor:"red",
    width: 200,
    height: 50,
    marginTop: 10,
    alignItems:"center",
    justifyContent:"center"
  },
  buttonText:{
    color:"#fff"
  },
  buttonBox:{
    alignItems:"center"
  }
});

export default Maps;
