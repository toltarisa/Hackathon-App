import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
export default class FamilyStatus extends Component {
  alertFunction = () => {
    Alert.alert(
      'Kişinin alınan son konumu',
      'Originn Coworking',
      [{text: 'Haritada göster!'}, {text: ''}, {text: 'Tamam'}],
      {cancelable: false},
    );
  };

  alertFunction2 = () => {
    Alert.alert(
      'Kişinin alınan son konumu',
      'Manisa Celal Bayar Üniversitesi Hasan Ferdi Turgutlu Teknoloji Fakültesi',
      [{text: 'Haritada göster!'}, {text: ''}, {text: 'Tamam'}],
      {cancelable: false},
    );
  };

  alertFunction3 = () => {
    Alert.alert(
      'Kişinin alınan son konumu',
      'İzmir Bornova',
      [{text: 'Haritada göster!'}, {text: ''}, {text: 'Tamam'}],
      {cancelable: false},
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
          style={styles.menu}>
          <Icon name="ios-menu" size={40} />
        </TouchableOpacity>
        <View style={styles.headView}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 40,
              marginLeft: -30,
              marginTop: 20,
            }}>
            Aile Grubu
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            flex: 8,
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            onPress={this.alertFunction}
            style={styles.memberStyle}>
            <Icon
              name="ios-contact"
              color="gray"
              size={50}
              style={{padding: 4}}
            />
            <Text style={styles.memberTextStyle}>OĞLUM</Text>
            <View></View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.alertFunction2}
            style={styles.memberStyle}>
            <Icon
              name="ios-contact"
              color="gray"
              size={50}
              style={{padding: 4}}
            />
            <Text style={styles.memberTextStyle}>KIZIM</Text>
            <View></View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.alertFunction}
            style={styles.memberStyle}>
            <Icon
              name="ios-contact"
              color="gray"
              size={50}
              style={{padding: 4}}
            />
            <Text style={styles.memberTextStyle}>BABAM</Text>
            <View></View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.alertFunction3}
            style={styles.memberStyle}>
            <Icon
              name="ios-contact"
              color="gray"
              size={50}
              style={{padding: 4}}
            />
            <Text style={styles.memberTextStyle}>ANNEM</Text>
            <View></View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.alertFunction}
            style={styles.memberStyle}>
            <Icon
              name="ios-contact"
              color="gray"
              size={50}
              style={{padding: 4}}
            />
            <Text style={styles.memberTextStyle}>UYE</Text>
            <View></View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.alertFunction}
            style={styles.memberStyle}>
            <Icon
              name="ios-contact"
              color="gray"
              size={50}
              style={{padding: 4}}
            />
            <Text style={styles.memberTextStyle}>UYE</Text>
            <View></View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.alertFunction}
            style={styles.memberStyle}>
            <Icon
              name="ios-contact"
              color="gray"
              size={50}
              style={{padding: 4}}
            />
            <Text style={styles.memberTextStyle}>UYE</Text>
            <View></View>
          </TouchableOpacity>
          <View style={{flexDirection: 'column', marginTop: 20, flex: 2}}>
            <View style={{flex: 1}}></View>
            <TouchableOpacity style={styles.addButton}>
              <Icon name="ios-add" color="white" size={58} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1,
    justifyContent: 'center',
  },
  headView: {
    padding: 25,
  },
  memberStyle: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    padding: 0,
    margin: 12,
  },
  memberTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginLeft: 270,
    height: 50,
    width: 50,
    borderRadius: 200,
    backgroundColor: '#2ecc71',
    borderColor: 'white',
  },
});
