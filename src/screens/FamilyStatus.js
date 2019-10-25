import React, { Component } from 'react'
import { Text,StyleSheet, View, ScrollView } from 'react-native'

export default class FamilyStatus extends Component {
  render() {
    return (
      <View>
        <View style={styles.headView}>
          <Text>AİLE GRUBU</Text>
        </View>
      <ScrollView style={styles.styleScrollView}>
        <View style={styles.container}>
        
          <View style={styles.containerView}>{/*Aile ferdi 1*/}
              <Text>ÜYE 1</Text>
          </View>
          
          <View style={styles.containerView}>{/*Aile ferdi 1*/}
            <Text>ÜYE 1</Text>
          </View>
          
         <View style={styles.containerView}>{/*Aile ferdi 1*/}
            <Text>ÜYE 1</Text>
          </View>

        </View>
      </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flexDirection:'column',
    justifyContent:'center',
  },
  headView:{
    alignItems:'center'
  },
  styleScrollView:{
    padding:5
  },
  containerView:{
    borderBottomWidth:1,
    padding:15,
    flex:1,
    alignItems:'center'
  },
  styleText:{

  }
})
