import React, { Component } from 'react'
import { Text,StyleSheet,Image,TouchableOpacity, View, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons'
export default class FamilyStatus extends Component {

  alertFunction = () => {
    Alert.alert(
      'Kişinin alınan son konumu',
      'Originn Coworking',
      [
        {text: 'Haritada göster!' ,},
        {text: '' ,},
        {text: 'Tamam'},
      ],
      { cancelable: false }
    )
  }
   
  
  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.headView}>
          <Text style={{fontWeight:'bold',fontSize:40}}>Aile Grubu</Text>
        </View>

          <View style={{alignItems:'center', flex:8, justifyContent:'space-evenly'}}>
            <TouchableOpacity onPress={this.alertFunction} style={styles.memberStyle}>
              <Icon name="ios-contact" color="gray" size={50} style={{padding:4}} />
              <Text style={styles.memberTextStyle}>OĞLUM</Text>
              <View></View>
            </TouchableOpacity>
          
            <TouchableOpacity onPress={this.alertFunction} style={styles.memberStyle}>
            <Icon name="ios-contact" color="gray" size={50} style={{padding:4}} />
              <Text style={styles.memberTextStyle}>KIZIM</Text>
              <View></View>
            </TouchableOpacity>
          
            <TouchableOpacity onPress={this.alertFunction} style={styles.memberStyle}>
            <Icon name="ios-contact" color="gray" size={50} style={{padding:4}} />
              <Text style={styles.memberTextStyle}>BABAM</Text>
              <View></View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.alertFunction} style={styles.memberStyle}>
            <Icon name="ios-contact" color="gray" size={50} style={{padding:4}} />
              <Text style={styles.memberTextStyle}>ANNEM</Text>
              <View></View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.alertFunction} style={styles.memberStyle}>
            <Icon name="ios-contact" color="gray" size={50} style={{padding:4}} />
              <Text style={styles.memberTextStyle}>UYE</Text>
              <View></View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.alertFunction} style={styles.memberStyle}>
            <Icon name="ios-contact" color="gray" size={50} style={{padding:4}} />
              <Text style={styles.memberTextStyle}>UYE</Text>
              <View></View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.alertFunction} style={styles.memberStyle}>
            <Icon name="ios-contact" color="gray" size={50} style={{padding:4}} />
              <Text style={styles.memberTextStyle }>UYE</Text>
              <View></View>
            </TouchableOpacity>
            <View style={{flexDirection:'column',marginTop:20,flex:2}}>
              <View style={{flex:1}}>
              </View>
              <TouchableOpacity style={styles.addButton}>
                <Icon name = "ios-add" color='white' size={88} />
              </TouchableOpacity>
          </View>
          </View>
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    margin:15,
    flex:1,
    justifyContent:'center'
  },
  headView:{
    padding:25,
  },
  memberStyle:{ 
    flex:1,
    borderColor:'gray',
    borderWidth:2,
    borderRadius:30,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    width: 450,
    padding:0,
    margin:12,
  },
  memberTextStyle:{
    fontSize:20,
    fontWeight:'bold'
  },
  addButton:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:50,
    marginLeft:380,
    height:100,
    width:100,
    borderRadius:200,
    backgroundColor:'#2ecc71',
    borderColor:'white'
  }
})
