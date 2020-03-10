import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

const ComponentsScreen = ()=>{
  const myName= "jerad"
  return (
  <View>
    <Text style={styles.textStyle}>Getting Started with React Native</Text>
    <Text style={styles.name}>My name is {myName}</Text>

  </View>
)

}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 70
  },
  name:{
    fontSize: 20
  }

})

export default ComponentsScreen
