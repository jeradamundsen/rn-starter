import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

const CounterScreen =()=>{



  return (
    <View>
      <Button title="increase" onPress={()=>setCounter(counter +1)}/>
      <Button title="decrease" onPress={()=>setCounter(counter-1)}/>
      <Text style={styles.textStyle}>Current Count: {counter} </Text>
    </View>

  )
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40
  }
})
export default CounterScreen
